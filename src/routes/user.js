const component = require( '../components/user' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/user/login',
      secure: false,
      schema: component.schemes.login,
      handler: 'login',
      roles: []
    },
    {
      method: 'GET',
      path: '/user/logout',
      secure: true,
      schema: null,
      handler: 'logout',
      roles: []
    },
    {
      method: 'GET',
      path: '/user/get',
      secure: true,
      schema: component.schemes.get,
      handler: 'get',
      roles: []
    },
    {
      method: 'PATCH',
      path: '/user/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
