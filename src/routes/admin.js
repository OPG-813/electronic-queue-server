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
    }
  ]
};