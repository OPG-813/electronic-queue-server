const SystemService = require( '../system/service' );

class TicketService {
  constructor( core ) {
    this.core = core;
    this.systemService = new SystemService( core );
  }

  async create( data ) {
    if ( !( await this.systemService.checkTime() ) ) {
      throw new this.core.BadRequestError( 'Рабочее время системы закончилось!' );
    }
    const workerId = await this.findWorker( await this.getSuitableWorkers( data.purposeId ) );
    const ticket = ( await this.core.db.query( `
      INSERT INTO Ticket( "workerId", "statusId", "purposeId", "codePrefix", "codeNumber" )
      VALUES ( $2,
      ( SELECT id FROM TicketStatus WHERE name = 'wait' ), $1,
      ( SELECT prefix FROM Purpose WHERE id = $1 ),
      TICKET_CODE( $1 ) ) RETURNING *;`, [ data.purposeId, workerId ] ) )[ 0 ];
    return {
      id: ticket.id,
      ticketNumber: `${ ticket.codePrefix }-${ ticket.codeNumber }`,
      peopleBefore: ( await this.getPeopleBefore( ticket.workerId, ticket.issuanceTime ) ).count,
      windowName: ( await this.getWindowName( ticket.workerId ) ).name,
      issuanceTime: ticket.issuanceTime,
      issuanceDate: ticket.issuanceDate,
    };
  }

  async getCalledTickets() {
    const tickets = await this.core.db.query( `SELECT * FROM Ticket WHERE
    "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'called' )
    AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) as date);` );
    const result = [];
    for ( const ticket of tickets ) {
      result.push(
        {
          id: ticket.id,
          ticketNumber: `${ ticket.codePrefix }-${ ticket.codeNumber }`,
          windowName: ( await this.getWindowName( ticket.workerId ) ) ?
            ( await this.getWindowName( ticket.workerId ) ).name : '',
          issuanceTime: ticket.issuanceTime,
          issuanceDate: ticket.issuanceDate,
        }
      );
    }

    return result;
  }

  async getWaitingTickets() {
    return this.core.db.query( `SELECT * FROM Ticket WHERE
    "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
    AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) as date);` );
  }

  async getSuitableWorkers( purposeId, except = null ) {
    const params = except ? [ purposeId, except ] : [ purposeId ];
    const result = await this.core.db.query( `SELECT * FROM WORKER
    WHERE "windowId" IN
    ( SELECT "windowId" FROM SystemWindowPurpose WHERE "purposeId" = $1 )
    AND "statusId" = ( SELECT id from WorkerStatus WHERE name = 'work' )
    ${ except ? 'AND "id" <> $2' : '' };`, params );
    return result;
  }

  async findWorker( workers ) {
    if ( !workers.length ) {
      throw new this.core.BadRequestError( 'Нет подходящих сотрудников!' );
    }
    let result = workers[ 0 ].id;
    let min = ( await this.core.db.query( `SELECT COUNT( id ) FROM Ticket
    WHERE "workerId" = $1
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
    AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() )
    AS date );`, [ result ] ) )[ 0 ].count;

    for ( const worker of workers ) {
      const current = ( await this.core.db.query( `SELECT COUNT( id ) FROM Ticket
      WHERE "workerId" = $1
      AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
      AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() )
      AS date );`, [ worker.id ] ) )[ 0 ].count;
      if ( current < min ) {
        result = worker.id;
        min = current;
      }
    }

    return result;
  }

  async getPeriodTicketsNumber( start, end ) {
    return ( await this.core.db.query( `SELECT COUNT( id ) FROM Ticket
    WHERE "issuanceDate" > $1
    AND "issuanceDate" < $2
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' );`, [ start, end ] ) )[ 0 ].count;
  }

  async getAverageTicketServiceTime( start, end ) {
    return ( await this.core.db.query( `SELECT CAST( AVG( "serviceTime" ) AS time(0) ) FROM Ticket
    WHERE "issuanceDate" > $1
    AND "issuanceDate" < $2
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' );`, [ start, end ] ) )[ 0 ].avg || '0';
  }

  async getAverageTicketWaitingTime( start, end ) {
    return ( await this.core.db.query( `SELECT CAST( AVG( "waitingTime" ) AS time(0) ) FROM Ticket
    WHERE "issuanceDate" > $1
    AND "issuanceDate" < $2
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' );`, [ start, end ] ) )[ 0 ].avg || '0';
  }

  async getPeopleBefore( workerId, issuanceTime ) {
    return ( await this.core.db.query( `SELECT COUNT( id )
    FROM Ticket WHERE "workerId" = $1
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
    AND "issuanceTime" < $2
    AND "issuanceDate" =
    CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date );`, [ workerId, issuanceTime ] ) )[ 0 ];
  }

  async getWindowName( workerId ) {
    return ( await this.core.db.query( `SELECT name from SystemWindow
    WHERE id = ( SELECT "windowId" FROM Worker WHERE id = $1 );`, [ workerId ] ) ) [ 0 ];
  }

  async get( id ) {
    return ( await this.core.db.select( 'Ticket', null, { id } ) ) [ 0 ];
  }

  getQueue( workerId ) {
    return this.core.db.query( `SELECT * FROM Ticket
      WHERE "workerId" = $1 AND
      "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' ) AND
      "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date )
      ORDER BY "issuanceTime", "codeNumber"`,
    [ workerId ] );
  }

  list( filters, pages ) {
    return this.core.db.select( 'Ticket', null, filters ? filters : {}, [ 'id' ], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Ticket', { id }, [ 'id' ] );
  }

  async getMinTime( workerId ) {
    return ( ( await this.core.db.query( `SELECT MIN( "issuanceTime" ) FROM Ticket
    WHERE "workerId" = $1
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
    AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date );`, [ workerId ] ) )[ 0 ] ).min;
  }

  async callNext( workerId ) {
    const minTime = await this.getMinTime( workerId );

    if ( !minTime ) {
      throw new this.core.BadRequestError( 'Нет подходящих талонов!' );
    }

    const result = ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'called' ),
    "waitingTime" = CAST( CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() ) AS time ) - "issuanceTime"
    WHERE "issuanceTime" = $1 AND "workerId" = $2 AND
    "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date )
    RETURNING *`, [ minTime, workerId ] ) );
    return result ? result : {};
  }

  async cancelTicket( id ) {
    const result = ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'absent' )
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
    return result;
  }

  async startService( id ) {
    return ( await this.core.db.query( `UPDATE TICKET SET
    "startServiceTime" = CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() ),
    "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'serving' )
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
  }

  async finishService( id ) {
    return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' ),
    "serviceTime" = CAST( CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() ) AS time ) - "startServiceTime"
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
  }

  async move( id, purposeId, priority ) {
    const ticket = await this.get( id );
    const workerId = await await this.findWorker( await this.getSuitableWorkers( purposeId, ticket.workerId ) );
    const minTime = await this.getMinTime( workerId );
    if ( priority && minTime ) {
      const result = ( await this.core.db.query( `UPDATE TICKET
      SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' ),
      "workerId" = $2,
      "issuanceTime" = CAST( $3 AS time ) - CAST( '00:00:30' AS time )
      WHERE "id" = $1 RETURNING *`, [ id, workerId, minTime ] ) )[ 0 ];
      return {
        id: result.id,
        ticketNumber: `${ result.codePrefix }-${ result.codeNumber }`,
        peopleBefore: ( await this.getPeopleBefore( result.workerId, result.issuanceTime ) ).count,
        windowName: ( await this.getWindowName( result.workerId ) ).name,
        issuanceTime: result.issuanceTime,
        issuanceDate: result.issuanceDate,
      };
    } else {
      const result = ( await this.core.db.query( `UPDATE TICKET
      SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' ),
      "workerId" = $2
      WHERE id = $1 RETURNING *`, [ id, workerId ] ) )[ 0 ];
      return {
        id: result.id,
        ticketNumber: `${ result.codePrefix }-${ result.codeNumber }`,
        peopleBefore: ( await this.getPeopleBefore( result.workerId, result.issuanceTime ) ).count,
        windowName: ( await this.getWindowName( result.workerId ) ).name,
        issuanceTime: result.issuanceTime,
        issuanceDate: result.issuanceDate,
      };
    }
  }
}

module.exports = TicketService;
