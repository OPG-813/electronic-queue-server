const WorkerService = require( './service' );
const UserService = require( '../user/service' );

class WorkerController {
  constructor( core ) {
    this.core = core;
    this.service = new WorkerService( core );
    this.userService = new UserService( core );
  }

  async create( data ) {
    const user = await this.userService.addUser( data.credentials.username,
      data.credentials.password, 'WORKER' );
    try {
      const status = await this.service.getStatusByName( 'not work' );
      const worker = await this.service.create( {
        ...data.worker,
        userId: user.id,
        statusId: status.id } );
      return worker;
    } catch ( error ) {
      await this.userService.remove( user.id );
      throw error;
    }
  }

  get( data ) {
    return this.service.get( data.id );
  }

  list( data ) {
    const pages = this.core.getObjectWithProperties( [ 'itemsNumber', 'page' ], data );
    delete data.itemsNumber;
    delete data.page;
    return this.service.list( data, pages );
  }

  async remove( data ) {
    const worker = await this.service.remove( data.id );
    await this.userService.remove( worker.userId );
    return worker;
  }

  async update( data ) {
    let worker = {};
    if ( data.updates.credentials ) {
      worker = await this.get( { id: data.id } );
      await this.userService.update( worker.userId, data.updates.credentials );
    }

    if ( data.updates.worker ) {
      worker = await this.service.update( data.id, data.updates.worker );
    }

    return worker;
  }

  getStatus( data ) {
    return this.service.getStatus( data.id );
  }

  async getPeriodStats( data ) {
    return {
      ticketsNumber: await this.service.getPeriodTicketsNumber( data.id, data.startDate, data.endDate ),
      averageTicketServiceTime: await this.service.getAverageTicketServiceTime( data.id, data.startDate, data.endDate ),
      id: data.id
    };
  }

  selectWindow( data, request  ) {
    return this.service.selectWindow( data.windowId, request.user.id );
  }

  goBreak( data ) {
    return this.service.goBreak( data.id );
  }

  finishWork( data ) {
    return this.service.finishWork( data.id );
  }

  me( data, request ) {
    return this.service.me( request.user.id );
  }
}

module.exports = WorkerController;
