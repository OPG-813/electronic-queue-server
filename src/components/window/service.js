class WindowService {
  constructor( core ) {
    this.core = core;
  }

  add( name ) {
    return this.core.db.insert( 'SystemWindow', { name }, [ 'id', 'name' ] );
  }

  async list( pages ) {
    const windows = await this.core.db.select( 'SystemWindow', null, null, [ 'name' ], pages );
    const promises = [];
    for ( const window of windows ) {
      const purposesPromise = this.core.db.query( `SELECT purpose.name, purpose.id FROM Purpose 
        JOIN SystemWindowPurpose swp on swp."windowId" = $1 
        WHERE swp."purposeId" = purpose.id ORDER BY name`, [ window.id ]
      );
      promises.push( purposesPromise.then( ( purposes ) => {
        window.purposes = purposes;
        return window;
      } ) );
    }
    return Promise.allSettled( promises );
  }

  addPurposes( id, purposes ) {
    const inserts = [];
    for ( const purpose of purposes ) {
      inserts.push( this.core.db.insert( 'SystemWindowPurpose',
        { windowId: id, purposeId: purpose.id },
        [ 'id', 'purposeId', 'windowId' ] )
      );
    }
    return Promise.allSettled( inserts );
  }

  removePurpose( id, purposeId ) {
    return this.core.db.delete( 'SystemWindowPurpose', { windowId: id, purposeId }, [ 'id', 'purposeId', 'windowId' ] );
  }

  remove( id ) {
    return this.core.db.delete( 'SystemWindow', { id }, [ 'id', 'name' ] );
  }

  update( id, fields ) {
    return this.core.db.update( 'SystemWindow', { ...fields }, { id }, [ 'id', 'name' ] );
  }

  async get( id ) {
    return ( await this.core.db.select( 'SystemWindow', null, { id } ) )[ 0 ];
  }
}

module.exports = WindowService;
