const SystemService = require( './service' );

class SystemController {
  constructor( core ) {
    this.core = core;
    this.systemService = new SystemService( core );
  }

  async status() {
    return this.systemService.getSystemStatus();
  }

  update( data ) {
    const id = data.id;
    delete data.id;
    return this.systemService.update( id, data );
  }

  getTimezones() {
    return this.systemService.getTimezones();
  }

  getCurrentStats() {
    return { waitingTickets: 0, activeWorkersNumber: 0, activeWindowNumber: 0 };
  }

  getPeriodStats() {
    return { ticketsNumber: 0, averageTicketServiceTime: 0, averageTicketWaitingTime: 0 };
  }
}

module.exports = SystemController;
