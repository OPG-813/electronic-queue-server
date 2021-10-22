module.exports = {
  create: {
    type: 'object',
    required: [ 'purposeId', 'fieldTypeId', 'name' ],
    properties: {
      purposeId: {
        type: 'string'
      },
      fieldTypeId: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
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

  getType: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      }
    },
    additionalProperties: false
  },    

  listType: {
    type: 'object',
    required: [],
    properties: {
      itemsNumber: {
        type: 'string'
      },
      page: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  list: {
    type: 'object',
    required: [],
    properties: {
      purposeId: {
        type: 'string'
      },
      fieldTypeId: {
        type: 'string'
      },
      itemsNumber: {
        type: 'string'
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
    required: [ 'id', 'updates' ],
    properties: {
      id: {
        type: 'string',
      },

      updates: {
        type: 'object',
        default: {},
        required: [],
        properties: {
          name: {
            type: 'string'
          },
          fieldTypeId: {
            type: 'string'
          }
        },
        additionalProperties: false
      }
    },
    additionalProperties: false
  },
};