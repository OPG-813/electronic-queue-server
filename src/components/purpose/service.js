class PurposeService {
  constructor( core ) {
    this.core = core;
  }

  add( name ) {
    return this.core.db.insert( 'Purpose', { name }, [ 'id', 'name', 'prefix' ] );
  }

  list( pages ) {
    return this.core.db.select( 'Purpose', null, null, [ 'name' ], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Purpose', { id }, [ 'id', 'name', 'prefix' ] );
  }

  update( id, fields ) {
    return this.core.db.update( 'Purpose', { ...fields }, { id }, [ 'id', 'name', 'prefix' ] );
  }
}

module.exports = PurposeService;
