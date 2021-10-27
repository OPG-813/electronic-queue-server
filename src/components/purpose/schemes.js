module.exports = {
  add: {
    type: 'object',
    required: [ 'name' ],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      }
    },
    additionalProperties: false
  },

  list: {
    type: 'object',
    required: [],
    properties: {
      itemsNumber: {
        type: 'string',
      },
      page: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  remove: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  update: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      name: {
        type: 'string',
      },
      id: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

};
