module.exports = {
  HTTP_PORT: process.env.HTTP_PORT,
  HTTPS_PORT: process.env.HTTPS_PORT,
  SERVER_HOST: process.env.SERVER_HOST,
  BODY_LIMIT: 31457280,
  RETURN_SCHEMA: process.env.NODE_ENV === 'development' ? true : false,
  MAX_FILE_SIZE: 5242880,
  MAX_FILE_NUMBER: 5
};
