class PurposeService {
  constructor( core ) {
    this.core = core;
  }

  add( name, prefix ) {
    return this.core.db.insert( 'Purpose', { name, prefix }, [ 'id', 'name', 'prefix' ] );
  }

  list( pages ) {
    return this.core.db.select( 'Purpose', null, null, [ 'name' ], pages );
  }

  get( id ) {
    return this.core.db.select( 'Purpose', null, { id } );
  }

  remove( id ) {
    return this.core.db.delete( 'Purpose', { id }, [ 'id', 'name', 'prefix' ] );
  }

  update( id, fields ) {
    return this.core.db.update( 'Purpose', { ...fields }, { id }, [ 'id', 'name', 'prefix' ] );
  }
}

module.exports = PurposeService;
