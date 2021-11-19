const SystemService = require( './service' );
const WorkerService = require( '../worker/service' );
const TicketService = require( '../ticket/service' );

class SystemController {
  constructor( core ) {
    this.core = core;
    this.systemService = new SystemService( core );
    this.workerService = new WorkerService( core );
    this.ticketService = new TicketService( core );
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

  async getCurrentStats() {
    return {
      waitingTickets: ( await this.ticketService.getWaitingTickets() ).length,
      activeWorkersNumber: ( await this.workerService.getActiveWorkers() ).length,
      activeWindowNumber: await this.workerService.getActiveWindowsNumber()
    };
  }

  async getPeriodStats( data ) {
    return {
      ticketsNumber: await this.ticketService.getPeriodTicketsNumber( data.startDate, data.endDate ),
      averageTicketServiceTime: await this.ticketService.getAverageTicketServiceTime( data.startDate, data.endDate ),
      averageTicketWaitingTime: await this.ticketService.getAverageTicketWaitingTime( data.startDate, data.endDate )
    };
  }
}

module.exports = SystemController;
