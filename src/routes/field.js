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
      roles: [ 'ADMIN' ]
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
      method: 'GET',
      path: '/field/getType',
      secure: true,
      schema: component.schemes.getType,
      handler: 'getType',
      roles: []
    },
    {
      method: 'GET',
      path: '/field/listType',
      secure: true,
      schema: component.schemes.listType,
      handler: 'listType',
      roles: []
    },
    {
      method: 'DELETE',
      path: '/field/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/field/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
