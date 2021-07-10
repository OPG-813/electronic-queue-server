const crypto = require( 'crypto' )
const config = require('../config').security;
const { ServerSideError } = require( './error' );

class Security {
  constructor() {
    this.defaultHash = '';
    this.hashPassword( '' ).then( hash => {
      this.defaultHash = hash;
    } );
  }

  serializeHash ( hash, salt, params ) {
    const paramString = Object.entries( params ).map( ( [ key, value ] ) => `${ key }=${ value }` ).join( ',' );
    const saltString = salt.toString( 'base64' ).split( '=' )[ 0 ];
    const hashString = hash.toString( 'base64' ).split( '=' )[ 0 ];
    return `$scrypt$${ paramString }$${ saltString }$${ hashString }`;
  }

  deserializeHash ( phcString ) {
    const parsed = phcString.split( '$' );
    parsed.shift();
    if ( parsed[ 0 ] !== 'scrypt' ) {
      throw new ServerSideError( 'Node.js crypto module only supports scrypt' );
    };
    const params = Object.fromEntries(
      parsed[ 1 ].split( ',' ).map( p => {
        const kv = p.split( '=' );
        kv[ 1 ] = Number( kv[ 1 ] );
        return kv;
      } )
    );
    const salt = Buffer.from( parsed[ 2 ], 'base64' );
    const hash = Buffer.from( parsed[ 3 ], 'base64' );
    return { params, salt, hash };
  }

  hashPassword ( password ) {
    return new Promise( ( resolve, reject ) => {
      crypto.randomBytes( config.SALT_LEN, ( err, salt ) => {
        if ( err ) {
          reject( err );
          return;
        };
        crypto.scrypt( password, salt, config.KEY_LEN, config.SCRYPT_PARAMS, ( err, hash ) => {
          if ( err ) {
            reject( err );
            return;
          };
          resolve( serializeHash( hash, salt, config.SCRYPT_PARAMS ) );
        } );
      } );
    } );
  }

  validatePassword ( password, hash = this.defaultHash ) {
    return  new Promise( ( resolve, reject ) => {
      const parsedHash = this.deserializeHash( hash );
      const len = parsedHash.hash.length;
      crypto.scrypt( password, parsedHash.salt, len, parsedHash.params, ( err, hashedPassword ) => {
          if ( err ) {
            reject( err );
            return;
          };
          resolve( crypto.timingSafeEqual( hashedPassword, parsedHash.hash ) );
        } );
      } );
  }

};

module.exports = Security;
