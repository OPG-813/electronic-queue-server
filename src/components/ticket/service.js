class TicketService {
  constructor( core ) {
    this.core = core;
  }

  create( data ) {
    return this.core.db.insert( 'Ticket', data, [ 'id' ] );
  }

  get( id ) {
    return this.core.db.select( 'Ticket', null, { id }, [] );
  }

  list( filters, pages ) {
    return this.core.db.select( 'Ticket', null, filters, [], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Ticket', { id }, [ 'id' ] );
  }
}

module.exports = TicketService;
