const AdminService = require( './service' );
const UserService = require( '../user/service' );
const UserController = require( '../user/controller'  );

class AdminController {
  constructor( core ) {
    this.core = core;
    this.adminService = new AdminService( core );
    this.userService = new UserService( core );
    this.userController = new UserController( core );
  }

  async register( data, request, response ) {
    if ( await this.core.session.checkSession( request.headers.cookie ) ) {
      throw new this.core.BadRequestError( 'Already logged in' );
    }

    if ( await this.userService.isUserRoleExists( 'ADMIN' ) ) {
      throw new this.core.BadRequestError( 'Admin is already exists' );
    }

    const user = await this.userService.addUser( data.username, data.password, 'ADMIN' );
    const admin = await this.adminService.addAdmin( data.name, user.id );
    await this.userController.startSession( user.id, request, response );

    return admin;
  }
}

module.exports = AdminController;
