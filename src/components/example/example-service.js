class ExampleService {
  constructor( core ) {
    this.core = core;
  }

  async method() {
    console.dir( this.core );
    return 'Ok';
  }
}

module.exports = ExampleService;
