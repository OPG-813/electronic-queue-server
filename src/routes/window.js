const component = require( '../components/window' );

module.exports = {
  Controller: component.controller,
  routes: [
    {
      method: 'POST',
      path: '/window/add',
      secure: true,
      schema: component.schemes.add,
      handler: 'add',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'GET',
      path: '/window/list',
      secure: true,
      schema: component.schemes.list,
      handler: 'list',
      roles: [ 'ADMIN', 'WORKER' ]
    },
    {
      method: 'GET',
      path: '/window/get',
      secure: true,
      schema: component.schemes.get,
      handler: 'get',
      roles: [ 'ADMIN', 'WORKER' ]
    },
    {
      method: 'DELETE',
      path: '/window/remove',
      secure: true,
      schema: component.schemes.remove,
      handler: 'remove',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'DELETE',
      path: '/window/removePurpose',
      secure: true,
      schema: component.schemes.removePurpose,
      handler: 'removePurpose',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'PATCH',
      path: '/window/update',
      secure: true,
      schema: component.schemes.update,
      handler: 'update',
      roles: [ 'ADMIN' ]
    },
    {
      method: 'POST',
      path: '/window/addPurposes',
      secure: true,
      schema: component.schemes.addPurposes,
      handler: 'addPurposes',
      roles: [ 'ADMIN' ]
    }

  ]
};
