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
    },
    additionalProperties: false
  },

  update: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      },
      username: {
        type: 'string'
      }
    },
    additionalProperties: false
  }

};
