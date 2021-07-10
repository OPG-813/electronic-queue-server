const logger = require( './logger' );
const config = require( '../config/server' );
const fs = require( 'fs' );
const path = require( 'path' );
const { getErrorForResponse, ServerSideError } = require( './error' );

class Server {
  constructor() {
    try {
      this.privateKey = fs.readFileSync( path.resolve( config.KEYCERTPATH ), 'utf8' );
      this.certificate = fs.readFileSync( path.resolve( config.FULLCHAINPATH ), 'utf8' );
      this.port = config.HTTPS_PORT;
    } catch ( error ) {
      logger.error( error );
      this.privateKey = null;
      this.certificate = null;
      this.port = config.HTTP_PORT;
    }
  }

  async start( routers ) {
    return this.startServer( routers );
  }

  wrapController( controller, handler, secure, schema ) {
    return async ( request, response ) => {
      try {
        const result = await controller[ handler ]();
        this.reply( response, result );
      } catch ( error ) {
        this.processError( error, response );
      }
    };
  }

  async processError( error, response ) {
    let clientResponseError = getErrorForResponse( error );
    if ( !clientResponseError ) {
      this.processUnhandledExeption( error );
      clientResponseError = getErrorForResponse( new ServerSideError() );
    }
    logger.error( error );
    this.sendError( clientResponseError, response );
  }

  async processUnhandledExeption( error ) {
    await logger.fatal( error );
    this.shutdown();
  }

  async sendError( error, response ) {
    this.setCode( response, error.httpCode );
    this.reply( response, error );
  }

  async close() {
    return this.server.close();
  }

  async shutdown( message = '' ) {
    try {
      await logger.info( `Closing server. ${ message }` );
      await this.close();
      await logger.info( 'Server closed gracefully!' );
    } catch ( error ) {
      await logger.error( 'Server shutdown error!' );
      await logger.error( error );
    }

    process.exit( 1 );
  }

}

module.exports = Server;
