module.exports = {
  control: {
    type: 'object',
    required: [ 'phone' ],
    properties: {
      phone: {
        type: 'string',
        pattern: '[0-9]{10,14}'
      }
    }
  }
};
