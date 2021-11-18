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

  async changePassword( id, password ) {
    const hashPassword = await this.core.security.hashPassword( password );
    return this.core.db.update( 'SystemUser',
      { password: hashPassword },
      { id }
    );
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

  async update( id, fields ) {
    if ( fields.password ) {
      fields.password = await this.core.security.hashPassword( fields.password );
    }
    return this.core.db.update( 'SystemUser', fields, { id }, [ 'id', 'username' ] );
  }

  remove( id ) {
    console.log( id );
    return this.core.db.delete( 'SystemUser', { id } );
  }

  async get( id ) {
    return ( await this.core.db.select( 'SystemUser', [ 'id', 'username', 'role' ], { id } ) )[ 0 ];
  }
}

module.exports = UserService;
