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
  },

  getQueue: {
    type: 'object',
    required: [ 'workerId' ],
    properties: {
      workerId: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  callNext: {
    type: 'object',
    required: [ 'workerId' ],
    properties: {
      workerId: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  cancelTicket: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  startService: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  finishService: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      }
    },
    additionalProperties: false
  },

  move: {
    type: 'object',
    required: [ 'id', 'purposeId', 'priority' ],
    properties: {
      id: {
        type: 'string',
      },
      purposeId: {
        type: 'string',
      },
      priority: {
        type: 'boolean',
      }
    },
    additionalProperties: false
  },

  getCalledTickets: {
    type: 'object',
    required: [],
    properties: {},
    additionalProperties: false
  }
};
