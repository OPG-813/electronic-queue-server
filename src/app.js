const routers = require( './routes' );
const Server = require( './modules/fastify-server' );
const Logger = require( './core/logger' );
const modules = require( './modules' );
const logger = new Logger();

const start = () => {
    const server = new Server( modules );
    server.start( routers );

    const exitApp = async ( error ) => {
      await logger.fatal( error );
      server.shutdown();
    };

    process.on( 'uncaughtException', exitApp );
    process.on( 'unhandledRejection', exitApp );
}



start();
