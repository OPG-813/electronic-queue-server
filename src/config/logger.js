module.exports = {
  LOGGER_HOST: process.env.LOGGER_HOST,
  LOGGER_PASSWORD: process.env.LOGGER_PASSWORD,
  SQL: process.env.NODE_ENV === 'development' ? true : false,
  INFO: process.env.NODE_ENV === 'development' ? true : false,
  ERROR: true,
  FATAL: true
};
