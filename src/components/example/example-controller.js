const ExampleService = require( './example-service' );

class ExampleController {
  constructor() {
    this.exampleService = new ExampleService();
  }

  async control() {
    return this.exampleService.method();
  }
}

module.exports = ExampleController;
