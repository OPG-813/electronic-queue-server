module.exports = {
  create: {
    type: 'object',
    required: [ 'worker', 'credentials' ],
    properties: {
      worker: {
        type: 'object',
        required: [ 'name' ],
        properties: {
          name: {
            type: 'string'
          }
        },
        additionalProperties: false
      },
      credentials: {
        type: 'object',
        required: [ 'username', 'password' ],
        properties: {
          username: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        },
        additionalProperties: false
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

  getStatus: {
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
      statusId: {
        type: 'string'
      },
      windowId: {
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
        required: [],
        properties: {
          worker: {
            type: 'object',
            default: {},
            properties: {
              name: {
                type: 'string',
              }
            },
            additionalProperties: false
          },
          credentials: {
            type: 'object',
            default: {},
            properties: {
              username: {
                type: 'string'
              },
              password: {
                type: 'string'
              }
            },
            additionalProperties: false
          },
        },
        additionalProperties: false
      },
    },
    additionalProperties: false
  },

  getPeriodStats: {
    type: 'object',
    required: [ 'startDate', 'endDate', 'id' ],
    properties: {
      startDate: {
        type: 'string'
      },
      endDate: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  selectWindow: {
    type: 'object',
    required: [ 'windowId' ],
    properties: {
      windowId: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  goBreak: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string'
      }
    },
    additionalProperties: false
  }
};

