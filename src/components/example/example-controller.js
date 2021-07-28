const ExampleService = require( './example-service' );

class ExampleController {
  constructor( core ) {
    this.core = core;
    this.exampleService = new ExampleService( core );
  }

  async control() {
    return this.exampleService.method();
  }
}

module.exports = ExampleController;
