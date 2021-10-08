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
    },
    additionalProperties: false
  },

  changePassword: {
    type: 'object',
    required: [ 'oldPassword', 'newPassword' ],
    properties: {
      oldPassword: {
        type: 'string',
      },
      newPassword: {
        type: 'string'
      }
    },
    additionalProperties: false
  }

};
