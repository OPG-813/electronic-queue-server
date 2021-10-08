const WindowService = require( './service' );

class WindowController {
  constructor( core ) {
    this.core = core;
    this.windowService = new WindowService( core );
  }

  add( data ) {
    return this.windowService.add( data.name );
  }

  remove( data ) {
    return this.windowService.remove( data.id );
  }

  update( data ) {
    const id = data.id;
    delete data.id;
    return this.windowService.update( id, data );
  }

  async list( data ) {
    const pages = this.core.getObjectWithProperties( [ 'itemsNumber', 'page' ], data );
    const promises = await this.windowService.list( pages );
    return this.getResultsFromSettled( promises );
  }

  async addPurposes( data ) {
    const promises = await this.windowService.addPurposes( data.id, data.purposes );
    return this.getResultsFromSettled( promises );
  }

  getResultsFromSettled( promiseResults ) {
    const results = [];
    for ( const promiseResult of promiseResults ) {
      if ( promiseResult.status === 'rejected' ) {
        throw promiseResult.reason;
      }
      results.push( promiseResult.value );
    }
    return results;
  }
}

module.exports = WindowController;
