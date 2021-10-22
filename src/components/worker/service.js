class WorkerService {
  constructor( core ) {
    this.core = core;
  }

  create( data ) {
    return this.core.db.insert( 'Worker', data, [ 'id' ] );
  }

  get( id ) {
    return this.core.db.select( 'Worker', null, { id }, [] );
  }

  list( filters, pages ) {
    return this.core.db.select( 'Worker', null, filters, [], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Worker', { id }, [ 'id' ] );
  }

  update( id, updates ) {
    return this.core.db.update( 'Worker', updates, { id }, [ 'id' ] );
  }
}

module.exports = WorkerService;
