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
    },
    {
      method: 'PATCH',
      path: '/admin/changePassword',
      secure: true,
      schema: component.schemes.changePassword,
      handler: 'changePassword',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/admin/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
