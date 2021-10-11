const component = require( '../components/system' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'GET',
      path: '/system/status',
      secure: false,
      schema: null,
      handler: 'status',
      roles: []
    },
    {
      method: 'PATCH',
      path: '/system/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'GET',
      path: '/system/getTimezones',
      secure: true,
      schema: null,
      handler: 'getTimezones',
      roles: [ 'ADMIN' ]
    },
  ]
};
