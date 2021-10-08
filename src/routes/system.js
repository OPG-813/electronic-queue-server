const component = require( '../components/system' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'GET',
      path: '/system/status',
      secure: true,
      schema: null,
      handler: 'status',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/system/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
