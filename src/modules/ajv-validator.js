const Validator = require( '../core/validator' );
const Ajv = require( 'ajv' );

class AjvValidator extends Validator {
  constructor() {
    super();
    this.ajv = new Ajv();
  }

  getValidationFunction( schema ) {
    return this.ajv.compile( schema );
  }

}

module.exports = AjvValidator;
