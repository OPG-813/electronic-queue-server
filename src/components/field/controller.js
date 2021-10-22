const FieldService = require( './service' );

class FieldController {
  constructor( core ) {
    this.core = core;
    this.service = new FieldService( core );
  }

  create( data ) {
    return this.service.create( data );
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
  
  remove( data ) {
    return this.service.remove( data.id );
  }

  update( data ) {
    return this.service.update( data.id, data.updates );
  }
  
  getType( data ) {
    return this.service.getType( data.id );
  }
  
  listType( data ) {
    const pages = this.core.getObjectWithProperties( [ 'itemsNumber', 'page' ], data );
    delete data.itemsNumber;
    delete data.page;
    return this.service.listType( data, pages );
  }
}

module.exports = FieldController;