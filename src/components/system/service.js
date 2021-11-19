class SystemService {
  constructor( core ) {
    this.core = core;
  }

  async getSystemStatus() {
    let systemStatus = ( await this.core.db.query(
      'SELECT *, CURRENT_TIME( 0 ) AT TIME ZONE ( timezone ) AS "currentTime" FROM SystemStatus' ) )[ 0 ];
    if ( !systemStatus ) {
      await this.core.db.insert( 'SystemStatus', {} );
      systemStatus = ( await this.core.db.query(
        'SELECT *, CURRENT_TIME( 0 ) AT TIME ZONE ( timezone ) AS "currentTime" FROM SystemStatus' ) )[ 0 ];
    }
    systemStatus.status = ( await this.checkTime() ) ? 'on' : 'off';
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

  async checkTime() {
    return ( await this.core.db.query( `SELECT CAST( CURRENT_TIME AT TIME ZONE( SYSTEM_TIMEZONE() ) as time)
     > ( SELECT "startTime" FROM SystemStatus )
     AND CAST( CURRENT_TIME AT TIME ZONE( SYSTEM_TIMEZONE() ) as time)
      < ( SELECT "endTime" FROM SystemStatus )
       AND CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) as date)
        >= ( SELECT "startDate" FROM SystemStatus )
         AND CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) as date)
          <= ( SELECT "endDate" FROM SystemStatus ) as bool;` ) )[ 0 ].bool;
  }
}

module.exports = SystemService;
