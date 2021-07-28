class Validator {
  getValidation( schema ) {
    return this.getValidationFunction( schema );
  }
}

module.exports = Validator;
