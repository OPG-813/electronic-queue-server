const defaultModules = require( '../modules' );

class Core {
  constructor( modules ) {
    this.core = [
      'common',
      'db',
      'error',
      'logger',
      'mailer',
      'cloudStorage',
      'security',
      'session',
      'validator'
    ];
    this.modules = {};
    this.loadModules( modules );
  }

  loadModules( modules ) {
    for ( const name of this.core ) {
      let Module = {};
      if ( Object.prototype.hasOwnProperty.call( modules, name ) ) {
        Module = modules[ name ];
      } else {
        Module = defaultModules[ name ];
      }
      if ( typeof module === 'function' ) {
        this.modules[ name ] = new Module();
      } else if ( typeof module === 'object' ) {
        this.modules = { ...this.modules, ...module };
      }
    }
  }

  getModules() {
    return Object.freeze( this.modules );
  }
}

module.exports = Core;
