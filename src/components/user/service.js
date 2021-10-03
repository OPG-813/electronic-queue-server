class UserService {
  constructor( core ) {
    this.core = core;
  }

  async checkPassword( username, password ) {
    const user = ( await this.core.db.select( 'SystemUser',
      [ 'password', 'username', 'id', 'role' ],
      { username }
    ) )[ 0 ];
    if ( user ) {
      if ( await this.core.security.validatePassword( password, user.password ) ) {
        delete user.password;
        return user;
      } else {
        throw new this.core.BadRequestError();
      }
    } else {
      throw new this.core.BadRequestError();
    }
  }

  async addUser( username, password, role ) {
    const hashPassword = await this.core.security.hashPassword( password );
    return this.core.db.insert( 'SystemUser',
      { username, password: hashPassword, role },
      [ 'username', 'role', 'id' ]
    );
  }

  async isUserRoleExists( role ) {
    const users = await this.core.db.select( 'SystemUser', [ 'id' ], { role } );
    return !!users.length;
  }
}

module.exports = UserService;
