const component = require( '../components/example' );

module.exports = {
  Controller: component.controller,
  routes: [
    { method: 'GET', path: '/phone', secure: false, schema: null, handler: 'control', roles: [ 'USER' ] }
  ]
};
