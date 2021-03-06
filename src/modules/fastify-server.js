const Server = require( '../core/server' );
const FastifyFactory = require( 'fastify' );
const config = require( '../config' ).server;
const cors = require( 'fastify-cors' );
const multipart = require( 'fastify-multipart' );

class FastifyServer extends Server {
  constructor( modules ) {
    super( modules );
    this.server = FastifyFactory( {
      https: this.port === config.HTTPS_PORT ? { key: this.privateKey, cert: this.certificate } : null,
      bodyLimit: config.BODY_LIMIT,
      onConstructorPoisoning: 'error',
      trustProxy: true
    } );
    this.server.register( cors, { origin: true, credentials: true } );
    this.server.register( multipart, { limits: { fileSize: config.MAX_FILE_SIZE, files: config.MAX_FILE_NUMBER } } );
  }

  async startServer( routers ) {
    this.setRoutes( routers );
    try {
      await this.server.listen( this.port, config.SERVER_HOST );
      this.coreModules.logger.info( 'Server is listening' );
    } catch ( error ) {
      this.coreModules.logger.fatal( error );
    }
  }

  async reply( response, result ) {
    response.send( result );
  }

  setCode( response, code ) {
    response.code( code );
  }

  setRoutes( routers ) {
    for ( const router of routers ) {
      const controller = new router.Controller( this.coreModules );
      for ( const route of router.routes ) {
        const handler = this.wrapController( controller, route );
        this.server.route( { method: route.method, url: route.path, handler } );
      }
    }
  }
}

module.exports = FastifyServer;
