const SystemService = require( './service' );

class SystemController {
  constructor( core ) {
    this.core = core;
    this.systemService = new SystemService( core );
  }

  async status() {
    return this.systemService.getSystemStatus();
  }

  update( data ) {
    const id = data.id;
    delete data.id;
    return this.systemService.update( id, data );
  }
}

module.exports = SystemController;
