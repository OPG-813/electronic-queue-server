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
  },

  update: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      },
      updates: {
        type: 'object',
        default: {},
        properties: {
          name: {
            type: 'string'
          }
        },
        additionalProperties: false
      }
    },
    additionalProperties: false
  }
};
