const TicketService = require( './service' );

class TicketController {
  constructor( core ) {
    this.core = core;
    this.service = new TicketService( core );
  }

  create( data ) {
    return this.service.create( data );
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

  getQueue( data ) {
    return this.service.getQueue( data.workerId );
  }

  callNext( data ) {
    return this.service.callNext( data.workerId );
  }

  cancelTicket( data ) {
    return this.service.cancelTicket( data.id );
  }

  startService( data ) {
    return this.service.startService( data.id );
  }

  finishService( data ) {
    return this.service.finishService( data.id );
  }

  move( data ) {
    return this.service.move( data.id, data.purposeId, data.priority );
  }

  getCalledTickets() {
    return this.service.getCalledTickets();
  }
}

module.exports = TicketController;
