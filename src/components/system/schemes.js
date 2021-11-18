module.exports = {
  update: {
    type: 'object',
    required: [ 'id' ],
    properties: {
      id: {
        type: 'string',
      },

      startDate: {
        type: 'string'
      },

      endDate: {
        type: 'string'
      },

      startTime: {
        type: 'string'
      },

      endTime: {
        type: 'string'
      },

      timezone: {
        type: 'string'
      }
    },
    additionalProperties: false
  },

  getPeriodStats: {
    type: 'object',
    required: [ 'startDate', 'endDate' ],
    properties: {
      startDate: {
        type: 'string'
      },
      endDate: {
        type: 'string'
      }
    },
    additionalProperties: false
  }
};
