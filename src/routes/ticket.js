const component = require( '../components/ticket' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/ticket/create',
      secure: false,
      schema: component.schemes.create,
      handler: 'create',
      roles: []
    },
    {
      method: 'GET',
      path: '/ticket/get',
      secure: true,
      schema: component.schemes.get,
      handler: 'get',
      roles: []
    },
    {
      method: 'GET',
      path: '/ticket/list',
      secure: true,
      schema: component.schemes.list,
      handler: 'list',
      roles: []
    },
    {
      method: 'DELETE',
      path: '/ticket/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: []
    }
  ]
};
