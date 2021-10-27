module.exports = {
  add: {
    type: 'object',
    required: [ 'name' ],
    properties: {
      name: {
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
        type: 'string'
      }
    },
    additionalProperties: false
  },

  removePurpose: {
    type: 'object',
    required: [ 'windowId', 'purposeId' ],
    properties: {
      windowId: {
        type: 'string'
      },
      
      purposeId: {
        type: 'string'
      }
    },
    additionalProperties: false
  },


  update: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      name: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  addPurposes: {
    type: 'object',
    required: [ 'id', 'purposes' ],
    properties: {
      id: {
        type: 'string'
      },
      purposes: {
        type: 'array',
        items: {
          type: 'object',
          required: [ 'id' ],
          properties: {
            id: {
              type: 'string'
            }
          }
        }
      }
    },
    additionalProperties: false
  },

  list: {
    type: 'object',
    properties: {
      page: {
        type: 'string'
      },
      itemsNumber: {
        type: 'string'
      }
    },
    additionalProperties: false
  }

};
