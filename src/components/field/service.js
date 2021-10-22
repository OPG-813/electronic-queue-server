class FieldService {
  constructor( core ) {
    this.core = core;
  }

  create( data ) {
    return this.core.db.insert( 'Field', data, [ 'id' ] );
  }

  get( id ) {
    return this.core.db.select( 'Field', null, { id }, [], pages );
  }
  
  list( filters, pages ) {
    return this.core.db.select( 'Field', null, filters, [], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Field', { id }, [ 'id' ] );
  }

  update( id, updates ) {
    return this.core.db.update( 'Field', updates, { id }, [ 'id' ] );
  }
}

module.exports = FieldService;