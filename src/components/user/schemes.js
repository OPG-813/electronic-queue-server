module.exports = {
  login: {
    type: 'object',
    required: [ 'username', 'password' ],
    properties: {
      username: {
        type: 'string',
      },
      password: {
        type: 'string'
      }
    }
  }
};