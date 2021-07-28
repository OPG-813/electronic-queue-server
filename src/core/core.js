const defaultModules = require( '../modules' );

class dependencies {
  constructor( modules ) {
    this.dependencies = [
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
    this.core = {};
    this.loadCore( modules );
  }

  loadCore( modules ) {
    for ( const name of this.dependencies ) {
      let Module = {};
      if ( Object.prototype.hasOwnProperty.call( modules, name ) ) {
        Module = modules[ name ];
      } else {
        Module = defaultModules[ name ];
      }
      if ( typeof Module === 'function' ) {
        this.core[ name ] = new Module();
      } else if ( typeof Module === 'object' ) {
        this.core = { ...this.core, ...Module };
      }
    }
  }

  getCore() {
    return Object.freeze( this.core );
  }
}

module.exports = dependencies;
