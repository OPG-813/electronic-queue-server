const SystemService = require( './service' );
const WorkerService = require( '../worker/service' );
const TicketService = require( '../ticket/service' );

const util = require( 'util' );
const { pipeline } = require( 'stream' );
const pump = util.promisify( pipeline );
const fs = require( 'fs' );
const homedir = require( 'os' ).homedir();

const bannerPath = homedir + '/lib/electronic-queue-nsuem';

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

  async loadBanner( data, request ) {
    const file = await request.file();
    if ( !fs.existsSync( bannerPath ) ) {
      fs.mkdirSync( bannerPath, { recursive: true } );
    }
    await pump( file.file, fs.createWriteStream( bannerPath + '/banner.png' ) );
    return 'OK';
  }

  async getBanner( data, request, response ) {
    response.header( 'Content-Type', 'image/png' );
    if ( !fs.existsSync( bannerPath + '/banner.png' ) ) {
      return '';
    } else {
      return fs.createReadStream( bannerPath + '/banner.png' );
    }
  }
}

module.exports = SystemController;
