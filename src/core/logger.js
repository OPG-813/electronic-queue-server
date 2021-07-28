const axios = require( 'axios' );
const config = require( '../config' ).logger;

class Logger {
  constructor() {
    this.token = null;
  }

  prepareData ( data ) {
    if ( typeof data === 'string' ) {
      return data;
    } else if ( data instanceof Error ) {
      return data.message;
    } else if ( typeof data === 'object' ) {
      return JSON.stringify( data );
    } else {
      return '';
    };
  }

  async info ( data ) {
    if ( config.INFO ) {
      return this.sendLog( { message: this.prepareData( data ), logType: 'info' } );
    }
  }

  async error ( error, data ) {
    if ( config.ERROR ) {
      return this.sendLog( { message: `${ error.message }\n${ this.prepareData( data ) }`, stack: error.stack, logType: 'error' } );
    }
  }

  async fatal ( error, data ) {
    if ( config.FATAL ) {
      return this.sendLog( { message: `${ error.message }\n${ this.prepareData( data ) }`, stack: error.stack, logType: 'fatal' } );
    }
  }

  async sql ( data ) {
    if ( config.SQL ) {
      return this.sendLog( { message: this.prepareData( data ), logType: 'sql' } );
    }
  }

  async getToken () {
    const response = await axios.get( 'http://' + config.LOGGER_HOST + `/log/getToken?password=${ config.LOGGER_PASSWORD }` );
    if ( response.data ) {
      this.token = response.data;
    };
  }

  async sendLog ( log ) {
    if ( !this.token ) {
      try {
       await this.getToken();
      } catch( error ) {
        console.dir( `Could not get token from logger! Log: ${ JSON.stringify( log ) }` );
        return;
      };
    };
    try {
      await axios.post( 'http://' + config.LOGGER_HOST + `/log/add`, { token, ...log } );
    } catch ( error ) {
      console.dir( 'Could not post to logger!' );
    };
  }
}

module.exports = Logger;
