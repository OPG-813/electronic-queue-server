const TicketService = require( '../ticket/service' );
const SystemService = require( '../system/service' );

class WorkerService {
  constructor( core ) {
    this.core = core;
    this.ticketService = new TicketService( core );
    this.systemService = new SystemService( core );
  }

  create( data ) {
    return this.core.db.insert( 'Worker', data, [ 'id' ] );
  }

  async get( id ) {
    return ( await this.core.db.select( 'Worker', null, { id } ) )[ 0 ];
  }

  list( filters, pages ) {
    return this.core.db.select( 'Worker', null, filters, [ 'id' ], pages );
  }

  async remove( id ) {
    return ( await this.core.db.delete( 'Worker', { id }, [ 'id', 'userId' ] ) )[ 0 ];
  }

  update( id, updates ) {
    return this.core.db.update( 'Worker', updates, { id }, [ 'id' ] );
  }

  async getStatusByName( name ) {
    return ( await this.core.db.select( 'WorkerStatus', [], { name } ) )[ 0 ];
  }

  async getStatus( id ) {
    return ( await this.core.db.select( 'WorkerStatus', [], { id } ) )[ 0 ];
  }

  getActiveWorkers() {
    return this.core.db.query( `SELECT * FROM WORKER
    WHERE "statusId" = ( SELECT id FROM WorkerStatus WHERE name = 'work' );` );
  }

  async getActiveWindowsNumber() {
    return ( await this.core.db.query( `SELECT DISTINCT ON ( "windowId" ) * FROM WORKER
     WHERE "statusId" = ( SELECT id FROM WorkerStatus WHERE name = 'work' );` ) ).length;
  }

  async getPeriodTicketsNumber( id, start, end ) {
    return ( await this.core.db.query( `SELECT COUNT( id ) FROM Ticket
    WHERE "issuanceDate" > $1
    AND "issuanceDate" < $2
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' )
    AND "workerId" = $3;` ), [ start, end, id ] )[ 0 ].count;
  }

  async getAverageTicketServiceTime( id, start, end ) {
    return ( await this.core.db.query( `SELECT AVG( "serviceTime" ) FROM Ticket
    WHERE "issuanceDate" > $1
    AND "issuanceDate" < $2
    AND "statusId" = ( SELECT id FROM TicketStatus WHERE name = 'served' )
    AND "workerId" = $3;` ), [ start, end, id ] )[ 0 ].avg;
  }

  async selectWindow( windowId, userId ) {
    if ( !( await this.systemService.checkTime() ) ) {
      throw new this.core.BadRequestError( 'Рабочее время системы закончилось!' );
    }
    const status = ( await this.core.db.select( 'WorkerStatus', [ 'id' ], { name: 'work' } ) )[ 0 ];
    return this.core.db.update( 'Worker', { windowId, statusId: status.id }, { userId }, [ 'id' ] );
  }

  async freeWorker( id, status ) {
    const waitingTickets = await this.ticketService.getQueue( id );
    const result = await this.core.db.query( ` UPDATE Worker
    SET "statusId" = ( SELECT id from WorkerStatus WHERE name = $2 )
    WHERE id = $1 RETURNING *;`, [ id, status ] );

    if ( !waitingTickets.length ) {
      return result;
    } else {
      try {
        for ( const ticket of waitingTickets ) {
          await this.ticketService.move( ticket.id, ticket.purpose, false );
        }
      } catch ( error ) {
        this.core.db.query( ` UPDATE Worker
    SET "statusId" = ( SELECT id from WorkerStatus WHERE name = 'work' )
    WHERE id = $1 RETURNING *;`, [ id ] );
        throw error;
      }
    }
  }

  goBreak( id ) {
    return this.freeWorker( id, 'break' );
  }

  finishWork( id ) {
    return this.freeWorker( id, 'not work' );
  }
}

module.exports = WorkerService;
