const config = require( '../config' ).error;

class BadRequestError extends Error {
  constructor( message = '', data = {} ) {
    super( `Bad request! ${ message }!` );
    this.httpCode = config.BAD_REQUEST_ERROR_CODE;
    this.clientMessage = this.message;
    this.data = data;
  }
};

class ServerSideError extends Error {
  constructor( message = '', data = {} ) {
    super( `Internal server error! ${ message } ${ JSON.stringify( data ) }!` );
    this.httpCode = config.INTERNAL_SERVER_ERROR_CODE;
    this.clientMessage = 'Internal server error!';
    this.data = null;
  }
};

class DataBaseError extends BadRequestError {
  constructor( message = '', data = {} ) {
    super( `Data error! ${ message }`, data );
    this.clientMessage = 'Data error!';
  }
};

class UnauthorizedError extends BadRequestError {
  constructor( message = '', data = {} ) {
    super( `Not uthorized! ${ message }`, data );
    this.httpCode = config.UNAUTHORIZED;
    this.clientMessage = 'Not uthorized!';
  }
};

class ForbiddenError extends BadRequestError {
  constructor( message = '', data = {} ) {
    super( `Forbidden! ${ message }`, data );
    this.httpCode = config.FORBIDDEN;
    this.clientMessage = 'Not enough rights!';
  }
};

class DataConflict extends DataBaseError {
  constructor( message = '', data = {} ) {
    super( `Data conflict error! ${ message }`, data );
    this.httpCode = isConflict ? config.CONFLICT_STATUS_CODE : config.INTERNAL_SERVER_ERROR_CODE;
    this.clientMessage = 'Data conflict error!';
  }
};

const getErrorForResponse = ( error ) => {
  if ( error instanceof BadRequestError || error instanceof ServerSideError ) {
    return { message: error.clientMessage, httpCode: error.httpCode, data: error.data };
  } else {
    return null;
  };
};

module.exports = {
  BadRequestError,
  ServerSideError,
  getErrorForResponse,
  DataBaseError,
  DataConflict,
  UnauthorizedError,
  ForbiddenError
};
