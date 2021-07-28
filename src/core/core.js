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
    for( const name of this.core ) {
      let module = {};
      if ( modules.hasOwnProperty( name ) ) {
        module = modules[ name ];
      } else {
        module = defaultModules[ name ];
      }
      if ( typeof module === 'function' ) {
        this.modules[ name ] = new module();
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
