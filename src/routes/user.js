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
  ]
};
