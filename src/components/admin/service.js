class AdminService {
  constructor( core ) {
    this.core = core;
  }

  async addAdmin( name, userId ) {
    return this.core.db.insert( 'AdminUser', { name, userId }, [ 'name', 'id', 'userId' ] );
  }
}

module.exports = AdminService;
