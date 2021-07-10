const config = require( '../config' ).error;

class BadRequestError extends Error {
  constructor( message ) {
    super();
    this.message = `Bad request! ${ message }!`;
    this.httpCode = config.BAD_REQUEST_ERROR_CODE;
  }
};

class ServerSideError extends Error {
  constructor( message ) {
    super();
    this.message = `Internal server error! ${ message }!`;
    this.httpCode = config.INTERNAL_SERVER_ERROR_CODE;
  }
};

class DataBaseError extends Error {
  constructor( message, isConflict ) {
    super( `Data error! ${ message }` );
    this.httpCode = isConflict ? config.CONFLICT_STATUS_CODE : config.INTERNAL_SERVER_ERROR_CODE;
  }
}

const getErrorForResponse = ( error ) => {
  if ( error instanceof BadRequestError ) {
    return { message: error.message, httpCode: error.httpCode };
  } else if ( error instanceof ServerSideError ) {
    return { message: 'Internal server error!', httpCode: error.httpCode };
  } else if ( error instanceof DataBaseError ) {
    return { message: 'Data error!', httpCode: error.httpCode };
  } else {
    return null;
  }
};

module.exports = {
  BadRequestError,
  ServerSideError,
  getErrorForResponse,
  DataBaseError
};
