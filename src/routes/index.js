const user = require( './user' );
const admin = require( './admin' );
const system = require( './system' );
const purpose = require( './purpose' );
const window = require( './window' );
const worker = require( './worker' );
const field = require( './field' );
const ticket = require( './ticket' );

module.exports = [
  user,
  admin,
  system,
  purpose,
  window,
  worker,
  field,
  ticket
];
