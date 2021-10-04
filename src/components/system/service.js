class SystemService {
  constructor( core ) {
    this.core = core;
  }

  async getSystemStatus() {
    const systemStatus = ( await this.core.db.select( 'SystemStatus' ) )[ 0 ];
    if ( !systemStatus ) {
      return this.core.db.insert( 'SystemStatus', {}, [
        'id',
        'status',
        'startDate',
        'endDate',
        'startTime',
        'endTime',
        'timezone'
      ] );
    }

    return systemStatus;
  }
}

module.exports = SystemService;
