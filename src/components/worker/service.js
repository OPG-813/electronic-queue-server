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

  async selectWindow( windowId, userId ) {
    const status = ( await this.core.db.select( 'WorkerStatus', [ 'id' ], { name: 'work' } ) )[ 0 ];
    return this.core.db.update( 'Worker', { windowId, statusId: status.id }, { userId }, [ 'id' ] );
  }

  goBreak( id ) {
    return this.core.db.query( ` UPDATE Worker
    SET "statusId" = ( SELECT id from WorkerStatus WHERE name = 'break' )
    WHERE id = $1 RETURNING *;`, [ id ] );
  }
}

module.exports = WorkerService;
