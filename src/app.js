const routers = require( './routes' );
const Server = require( './modules/fastify-server' );
const logger = require( './core/logger' );

const start = () => {
    const server = new Server();
    server.start( routers );

    const exitApp = async ( error ) => {
      await logger.fatal( error );
      server.shutdown();
    };

    process.on( 'uncaughtException', exitApp );
    process.on( 'unhandledRejection', exitApp );
}



start();
