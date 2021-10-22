const TicketService = require( './service' );

class TicketController {
  constructor( core ) {
    this.core = core;
    this.service = new TicketService( core );
  }

  create( data ) {
    return this.purposeService.add( data );
  }

  get( data ) {
    return this.service.get( data.id );
  }

  list( data ) {
    return this.service.list( data.filters, data.pages );
  }

  remove( data ) {
    return this.service.remove( data.id );
  }
}

module.exports = TicketController;
