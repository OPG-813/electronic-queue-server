module.exports = {
  register: {
    type: 'object',
    required: [ 'username', 'password', 'name' ],
    properties: {
      username: {
        type: 'string',
      },
      password: {
        type: 'string'
      },
      name: {
        type: 'string'
      }
    }
  }
};
