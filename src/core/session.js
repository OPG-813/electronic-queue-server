const db = require( './db' );
const crypto = require( 'crypto' );
const config = require( '../config' ).session;

class Session {
  parseCookies ( cookie ) {
    const values = {};
    const items = cookie.split( ';' );
    for ( const item of items ) {
      const parts = item.split( '=' );
      const key = parts[ 0 ].trim();
      const value = parts[ 1 ] || '';
      values[ key ] = value.trim();
    }
    return values;
  }

  parseHost ( host ) {
    const portOffset = host.indexOf( ':' );
    if ( portOffset > -1 ) {
      return host.substr( 0, portOffset );
    }
    return host;
  }

  generateToken () {
    const base = config.ALPHA_DIGIT.length;
    const bytes = crypto.randomBytes( base );
    let key = '';
    for ( let i = 0; i < config.TOKEN_LENGTH; i++ ) {
      const index = ( ( bytes[ i ] * base ) / BYTE ) | 0;
      key += ALPHA_DIGIT[ index ];
    }
    return key;
  }

  async startSession ( request, response, userId ) {
    const token = this.generateToken();
    const host = this.parseHost( request.headers.host );
    const ip = request.connection.remoteAddress;
    const cookie = `${ config.TOKEN }=${ token }; ${ config.COOKIE_HOST }=${ host }; SameSite=None; Secure; HttpOnly`;
    db.query( 'INSERT INTO Session( "userId", "token", "ip" ) VALUES( $1, $2, $3 )', [ userId, token, ip ] );
    if ( response ) {
      response.setHeader( 'Set-Cookie', cookie );
    };
  }

  async checkSession ( request ) {
    const token = this.getTokenFromCookie( request );
    if ( token !== '' ) {
      let result = await db.query( 'SELECT "userId" FROM Session WHERE "token" = $1', [ token ] );
      if ( result.rows && result.rows.length !== 0 ) {
        let { userId } = result.rows[ 0 ];
        if ( userId && typeof userId === 'number' ) {
          return true;
        };
      };
    };
    return false;
  }

  async deleteSession ( request, response ) {
    const token = this.getTokenFromCookie( request );
    const host = this.parseHost( request.headers.host );
    if ( token !== '' ) {
      if ( response ) {
        response.setHeader( 'Set-Cookie', config.COOKIE_DELETE + host );
      };
    } else {
      const error = new Error( 'Unable to log out, user is not logged in!' );
      error.code = '11';
      throw error;
    };
    db.query( 'DELETE FROM Session WHERE "token"=$1', [ token ] );
  }

  getTokenFromCookie ( request ) {
    const { cookie } = request.headers;
    if ( cookie && typeof cookie === 'string' ) {
      const cookies = this.parseCookies( cookie );
      const { token } = cookies;
      if ( token !== undefined ) {
        return token;
      };
    };
    return '';
  }

  async getSessionUserId ( request ) {
    const token = this.getTokenFromCookie( request );
    if ( token !== '' ) {
      const result = await db.query( 'SELECT "userId" FROM Session WHERE "token"=$1', [ token ] );
      if ( result.rows.length !== 0 ) {
        return result.rows[ 0 ].userId;
      } else {
        throw new Error( 'No session with this user\'s token!' );
      }
    } else {
      throw new Error( 'No token passed!' );
    }
  }

}

module.exports = Session;
