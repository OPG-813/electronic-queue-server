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
    },
    {
      method: 'GET',
      path: '/ticket/getQueue',
      secure: true,
      schema: component.schemes.getQueue,
      handler: 'getQueue',
      roles: [ 'WORKER' ]
    },
    {
      method: 'PATCH',
      path: '/ticket/callNext',
      secure: true,
      schema: component.schemes.callNext,
      handler: 'callNext',
      roles: [ 'WORKER' ]
    },
    {
      method: 'PATCH',
      path: '/ticket/cancelTicket',
      secure: true,
      schema: component.schemes.cancelTicket,
      handler: 'cancelTicket',
      roles: [ 'WORKER' ]
    },
    {
      method: 'PATCH',
      path: '/ticket/startService',
      secure: true,
      schema: component.schemes.startService,
      handler: 'startService',
      roles: [ 'WORKER' ]
    },
    {
      method: 'PATCH',
      path: '/ticket/finishService',
      secure: true,
      schema: component.schemes.finishService,
      handler: 'finishService',
      roles: [ 'WORKER' ]
    },
    {
      method: 'PATCH',
      path: '/ticket/move',
      secure: true,
      schema: component.schemes.move,
      handler: 'move',
      roles: [ 'WORKER' ]
    }
  ]
};
