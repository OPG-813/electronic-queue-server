const component = require( '../components/admin' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/admin/register',
      secure: false,
      schema: component.schemes.register,
      handler: 'register',
      roles: []
    },
    {
      method: 'GET',
      path: '/admin/me',
      secure: true,
      schema: null,
      handler: 'me',
      roles: [ 'ADMIN' ]
    }
  ]
};