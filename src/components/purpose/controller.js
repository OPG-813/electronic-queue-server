const PurposeService = require( './service' );

class PurposeController {
  constructor( core ) {
    this.core = core;
    this.purposeService = new PurposeService( core );
  }

  async add( data ) {
    return this.purposeService.add( data.name );
  }

  async list( data ) {
    const pages = this.core.getObjectWithProperties( [ 'itemsNumber', 'page' ], data );
    return this.purposeService.list( pages );
  }

  async remove( data ) {
    return this.purposeService.remove( data.id );
  }

  async update( data ) {
    const id = data.id;
    delete data.id;
    return this.purposeService.update( id, data );
  }
}

module.exports = PurposeController;
