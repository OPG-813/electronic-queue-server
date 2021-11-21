const component = require( '../components/purpose' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/purpose/add',
      secure: true,
      schema: component.schemes.add,
      handler: 'add',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'GET',
      path: '/purpose/list',
      secure: false,
      schema: component.schemes.list,
      handler: 'list',
      roles: []
    },
    {
      method: 'GET',
      path: '/purpose/get',
      secure: false,
      schema: component.schemes.get,
      handler: 'get',
      roles: []
    },
    {
      method: 'DELETE',
      path: '/purpose/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/purpose/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    }
  ]
};
