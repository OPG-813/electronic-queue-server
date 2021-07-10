const Server = require( '../core/server' )
const express = require( 'express' )
const cors = require( 'cors' )
const multer = require( 'multer' )
const config = require( '../config/config' ) 

class ServerExpress extends Server {
  constructor() {
    super()
    this.app = express()
    this.app.use( express.urlencoded( { extended: true } ) )
    this.app.use( express.json() )
    const corsOptions = {
      origin: true,
      credentials: true
    }
    this.app.use( cors( corsOptions ) )
}

  start() {
    this.createServer( this.app )
  }

  setRoutes( routers ) {
    for( const router of routers ) {
      for ( const method in router ) {
        for( const route of router[ method ] ) {
          let controller = route.controller
          controller = this.wrapController( controller, route.public )
          this.app[ method ]( route.path, controller )
        }
      }
    }
  }
}

module.exports = ServerExpress
