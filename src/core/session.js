const DB = require( './db' );
const crypto = require( 'crypto' );
const config = require( '../config' ).session;
const { SESSION_TABLE_NAME } = require('../config/session');
const db = new DB();

class Session {
  parseCookies ( cookie ) {
    const values = {};
    const items = cookie.split( ';' );
    for ( const item of items ) {
      const parts = item.split( '=' );
      const key = parts[ 0 ].trim();
      const value = parts[ 1 ] || '';
      values[ key ] = value.trim();
    };
    return values;
  }

  parseHost ( host ) {
    const portOffset = host.indexOf( ':' );
    if ( portOffset > -1 ) {
      return host.substr( 0, portOffset );
    };
    return host;
  }

  generateToken () {
    const base = config.ALPHA_DIGIT.length;
    const bytes = crypto.randomBytes( base );
    let key = '';
    for ( let i = 0; i < config.TOKEN_LENGTH; i++ ) {
      const index = ( ( bytes[ i ] * base ) / BYTE ) | 0;
      key += ALPHA_DIGIT[ index ];
    };
    return key;
  }

  async startSession ( headerHost, ip, userId ) {
    const token = this.generateToken();
    const host = this.parseHost( headerHost );
    const cookie = `${ config.TOKEN }=${ token }; ${ config.COOKIE_HOST }=${ host }; SameSite=None; Secure; HttpOnly`;
    await db.insert( config.SESSION_TABLE_NAME, { userId, token, ip } );
    return cookie;
  }

  async checkSession ( cookie ) {
    const token = this.getTokenFromCookie( cookie );
    if ( token !== '' ) {
      const result = await db.select( config.SESSION_TABLE_NAME, [ 'userId' ], { token } );
      const { userId } = result[ 0 ];
      if ( userId ) {
        return true;
      };
    };
    return false;
  }

  async deleteSession ( cookie, headerHost ) {
    const token = this.getTokenFromCookie( cookie );
    const host = this.parseHost( headerHost );
    if ( token !== '' ) {
      await db.delete( config.SESSION_TABLE_NAME, { token } );
      return config.COOKIE_DELETE + host;
    } else {
      return null;
    };
  }

  getTokenFromCookie ( cookie ) {
    if ( cookie && typeof cookie === 'string' ) {
      const cookies = this.parseCookies( cookie );
      const { token } = cookies;
      if ( token !== undefined ) {
        return token;
      };
    };
    return '';
  }

  async getSessionUser ( cookie ) {
    const token = this.getTokenFromCookie( cookie );
    if ( token !== '' ) {
      const result = await db.query( `SELECT * FROM ${ config.USER_TABLE_NAME } WHERE "id"=
      ALL ( SELECT "userId" FROM ${ SESSION_TABLE_NAME } WHERE "token=$1")`, [ token ] );
      return result[ 0 ] || null;
    } else {
      return null;
    };
  }

}

module.exports = Session;
