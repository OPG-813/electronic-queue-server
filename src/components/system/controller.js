const SystemService = require( './service' );

class SystemController {
  constructor( core ) {
    this.core = core;
    this.systemService = new SystemService( core );
  }

  async status() {
    return this.systemService.getSystemStatus();
  }
}

module.exports = SystemController;
