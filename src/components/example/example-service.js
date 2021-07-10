const db = require( '../../core/db' );

class ExampleService {
  async method () {
    let result = await db.systemUser.create( {
      data:{
        phone: '888888888',
        password: 'testtest',
        username: '888888888'
      }
    } );
    return result;
  }
}

module.exports = ExampleService;
