const config = require( '../config' ).server;
const fs = require( 'fs' );
const path = require( 'path' );
const Core = require( './core' );

class Server {
  constructor( modules ) {
    try {
      this.core = new Core( modules );
      this.coreModules = this.core.getCore();
      this.privateKey = fs.readFileSync( path.resolve( config.KEYCERTPATH ), 'utf8' );
      this.certificate = fs.readFileSync( path.resolve( config.FULLCHAINPATH ), 'utf8' );
      this.port = config.HTTPS_PORT;
    } catch ( error ) {
      this.coreModules.logger.error( error );
      this.privateKey = null;
      this.certificate = null;
      this.port = config.HTTP_PORT;
    }
  }

  async start( routers ) {
    return this.startServer( routers );
  }

  wrapController( controller, route ) {
    let validate = null;
    if ( route.schema ) {
      validate = this.coreModules.validator.getValidationFunction( route.schema );
    }
    return async ( request, response ) => {
      try {
        await this.authUser( request, route );
        const data = { ...request.body, ...request.query, ...request.params };
        if ( validate && !validate( data ) ) {
          throw new this.coreModules.BadRequestError( 'Request data validation error',
            config.RETURN_SCHEMA ? route.schema : null );
        }
        const result = await controller[ route.handler ]( data, request, response );
        this.reply( response, result );
      } catch ( error ) {
        this.processError( error, response );
      }
    };
  }

  async authUser( request, route ) {
    request.user = {};
    if ( route.secure ) {
      const user = await this.coreModules.session.getSessionUser( request.headers.cookie );
      if ( !user ) {
        throw new this.coreModules.UnauthorizedError();
      } else if ( route.roles.length !== 0 && route.roles.indexOf( user.role ) === -1 ) {
        throw new this.coreModules.ForbiddenError();
      }
      request.user = user;
    }
  }

  async processError( error, response ) {
    let clientResponseError = this.coreModules.getErrorForResponse( error );
    if ( !clientResponseError ) {
      this.processUnhandledExeption( error );
      clientResponseError = this.coreModules.getErrorForResponse( new this.coreModules.ServerSideError() );
    }
    this.coreModules.logger.error( error );
    this.sendError( clientResponseError, response );
  }

  async processUnhandledExeption( error ) {
    await this.coreModules.logger.fatal( error );
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
      await this.coreModules.logger.info( `Closing server. ${ message }` );
      await this.close();
      await this.coreModules.logger.info( 'Server closed gracefully!' );
    } catch ( error ) {
      await this.coreModules.logger.error( 'Server shutdown error!' );
      await this.coreModules.logger.error( error );
    }
    process.exit( 1 );
  }

}

module.exports = Server;
