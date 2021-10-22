module.exports = {
  create: {
    type: 'object',
    required: [],
    properties: {},
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

  list: {
    type: 'object',
    required: [],
    properties: {
      filters: {
        type: 'object',
        required: [],
        properties: {},
        additionalProperties: false
      },
      pages: {
        type: 'object',
        required: [ 'itemsNumber', 'page' ],
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
    required: [ 'id', 'updates' ],
    properties: {
      id: {
        type: 'string',
      },

      updates: {
        type: 'object',
        required: [],
        properties: {},
        additionalProperties: false
      }
    },
    additionalProperties: false
  },
};