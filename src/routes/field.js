const component = require( '../components/field' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/field/create',
      secure: true,
      schema: component.schemes.create,
      handler: 'create',
      roles: []
    },
    {
      method: 'GET',
      path: '/field/get',
      secure: true,
      schema: component.schemes.get,
      handler: 'get',
      roles: []
    },
    {
      method: 'GET',
      path: '/field/list',
      secure: true,
      schema: component.schemes.list,
      handler: 'list',
      roles: []
    },
    {
      method: 'DELETE',
      path: '/field/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: []
    },
    {
      method: 'PATCH',
      path: '/field/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: []
    }
  ]
};