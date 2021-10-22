const component = require( '../components/worker' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/worker/create',
      secure: true,
      schema: component.schemes.create,
      handler: 'create',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'GET',
      path: '/worker/get',
      secure: true,
      schema: component.schemes.get,
      handler: 'get',
      roles: []
    },
    {
      method: 'GET',
      path: '/worker/list',
      secure: true,
      schema: component.schemes.list,
      handler: 'list',
      roles: []
    },
    {
      method: 'DELETE',
      path: '/worker/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/worker/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
