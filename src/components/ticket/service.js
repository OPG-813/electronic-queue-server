class TicketService {
  constructor( core ) {
    this.core = core;
  }

  async create( data ) {
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

  async getSuitableWorkers( purposeId ) {
    return this.core.db.query( `SELECT * FROM WORKER
     WHERE "windowId" IN
     ( SELECT "windowId" FROM SystemWindowPurpose WHERE "purposeId" = '$1' )
     AND "statusId" = ( SELECT id from WorkerStatus WHERE name = 'work' );`, [ purposeId ] );
  }

  async findWorker( workers ) {
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

  get( id ) {
    return this.core.db.select( 'Ticket', null, { id }, [] );
  }

  getQueue( workerId ) {
    return this.core.db.query( `SELECT * FROM Ticket
      WHERE workerId = $1 AND
      statusId = ( SELECT id FROM TicketStatus WHERE name = 'wait' )`,
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

  async getMaxTime( workerId ) {
    return ( ( await this.core.db.query( `SELECT MAX( "waitingTime" ) FROM Ticket
    WHERE "workerId" = $1
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' )
    AND "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date );`, [ workerId ] ) )[ 0 ] ).max;
  }

  async callNext( workerId ) {
    const minTime = this.getMinTime( workerId );
    return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'called' ),
    "waitingTime" = CAST( CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() ) AS time ) - "issuanceTime"
    WHERE "issuanceTime" = $1 AND "workerId" = $2 RETURNING *`, [ minTime, workerId ] ) )[ 0 ];
  }

  async cancelTicket( id ) {
    return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'absent' )
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
  }

  async startService( id ) {
    return ( await this.core.db.query( `UPDATE TICKET SET
    "startServiceTime" = CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() )
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
  }

  async finishService( id ) {
    return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' ),
    "serviceTime" = CAST( CURRENT_TIME(0) AT TIME ZONE( SYSTEM_TIMEZONE() ) AS time ) - "startServiceTime"
    WHERE "id" = $1 RETURNING *`, [ id ] ) )[ 0 ];
  }

  async move( id, purposeId, priority ) {
    const workerId = await await this.findWorker( await this.getSuitableWorkers( purposeId ) );

    if ( priority ) {
      const minTime = this.getMinTime( workerId );
      return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' ),
    "workerId" = $2,
    "issuanceTime" = $3 - '00:00:30'
    WHERE "id" = $1 RETURNING *`, [ id, workerId, minTime ] ) )[ 0 ];
    } else {
      return ( await this.core.db.query( `UPDATE TICKET
    SET "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'wait' ),
    "workerId" = $2,
    WHERE "id" = $1 RETURNING *`, [ id, workerId ] ) )[ 0 ];
    }
  }
}

module.exports = TicketService;
