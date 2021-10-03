const UserService = require( './service' );

class UserController {
  constructor( core ) {
    this.core = core;
    this.userService = new UserService( core );
  }

  async login( data, request, response ) {
    if ( await this.core.session.checkSession( request.headers.cookie ) ) {
      throw new this.core.BadRequestError( 'Already logged in' );
    }
    const user = await this.userService.checkPassword( data.username, data.password );
    await this.startSession( user.id, request, response );
    return user;
  }

  async startSession( userId, request, response ) {
    const cookie = await this.core.session.startSession( request.headers.host, request.ip, userId );
    response.header( 'Set-Cookie', cookie );
  }

  async logout( data, request, response ) {
    const cookie = await this.core.session.deleteSession( request.headers.cookie, request.headers.host );
    response.header( 'Set-Cookie', cookie );
    return 'OK';
  }
}

module.exports = UserController;
