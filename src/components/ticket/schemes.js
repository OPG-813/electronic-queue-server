module.exports = {
  create: {
    type: 'object',
    required: [ 'purposeId' ],
    properties: {
      purposeId: {
        type: 'string'
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

  list: {
    type: 'object',
    required: [],
    properties: {
      filters: {
        type: 'object',
        required: [],
        properties: {
          workerId: {
            type: 'string'
          },
          statusId: {
            type: 'string'
          },
          purposeId: {
            type: 'string'
          },
        },
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
  }
};
