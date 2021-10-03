module.exports = {
  common: require( '../core/common' ),
  db: require( '../core/db' ),
  error: require( '../core/error' ),
  logger: require( '../core/logger' ),
  //mailer: require( './nodemailer-mailer' ),
  //cloudStorage: require( './aws-cloud-storage' ),
  security: require( '../core/security' ),
  session: require( '../core/session' ),
  validator: require( './ajv-validator' ),
};
