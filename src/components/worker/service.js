class WorkerService {
  constructor( core ) {
    this.core = core;
  }

  create( data ) {
    return this.core.db.insert( 'Worker', data, [ 'id' ] );
  }

  async get( id ) {
    return ( await this.core.db.select( 'Worker', null, { id } ) )[ 0 ];
  }

  list( filters, pages ) {
    return this.core.db.select( 'Worker', null, filters, [ 'id' ], pages );
  }

  async remove( id ) {
    return ( await this.core.db.delete( 'Worker', { id }, [ 'id', 'userId' ] ) )[ 0 ];
  }

  update( id, updates ) {
    return this.core.db.update( 'Worker', updates, { id }, [ 'id' ] );
  }
  
  async getStatusByName( name ) {
    return ( await this.core.db.select( 'WorkerStatus', [], { name } ) )[ 0 ];
  }
  
  async getStatus( id ) {
    return ( await this.core.db.select( 'WorkerStatus', [], { id } ) )[ 0 ];
  }
}

module.exports = WorkerService;
