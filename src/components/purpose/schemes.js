module.exports = {
  add: {
    type: 'object',
    required: [ 'name', 'prefix' ],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      prefix: {
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

  get: {
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
      },
      prefix: {
        type: 'string',
        minLength: 1,
      }
    },
    additionalProperties: false
  },

};
