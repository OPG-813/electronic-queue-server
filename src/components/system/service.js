class SystemService {
  constructor( core ) {
    this.core = core;
  }

  async getSystemStatus() {
    const systemStatus = ( await this.core.db.query( 
      'SELECT *, CURRENT_TIME( 0 ) AT TIME ZONE ( timezone ) AS "currentTime" FROM SystemStatus' ) )[ 0 ];
    if ( !systemStatus ) {
      await this.core.db.insert( 'SystemStatus', {} );
      return ( await this.core.db.query( 
        'SELECT *, CURRENT_TIME( 0 ) AT TIME ZONE ( timezone ) AS "currentTime" FROM SystemStatus' ) )[ 0 ];
    }

    return systemStatus;
  }

  async update( id, fields ) {
    await this.core.db.update( 'SystemStatus', fields, { id } );
    return ( await this.core.db.query( 
      'SELECT *, CURRENT_TIME( 0 ) AT TIME ZONE ( timezone ) AS "currentTime" FROM SystemStatus' ) )[ 0 ];
  }
  
  getTimezones() {
    return this.core.db.query( `SELECT name, utc_offset FROM pg_timezone_names 
      WHERE name LIKE 'Asia%' OR name LIKE 'Europe%' 
      ORDER BY utc_offset asc` );
  }
}

module.exports = SystemService;
