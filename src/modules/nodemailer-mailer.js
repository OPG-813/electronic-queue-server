const nodemailer = require( 'nodemailer' );
const SMTPMailer = require( '../core/mailer.js' );

class NodemailerSMTP extends SMTPMailer {
  constructor() {
    super();
    this.transport = nodemailer.createTransport( {
      host: this.host,
      port: this.port,
      auth: { user: this.username, pass: this.password }
    } );
  }

  checkConnection() {
    return new Promise( ( resolve, reject ) => {
      this.transport.verify( ( error, success ) => {
        if ( error ) {
          reject( error );
        } else {
          resolve( success );
        }
      } );
    } );
  }

  sendMail( message ) {
    return new Promise( ( resolve, reject ) => {
      this.transport.sendMail( message, ( error, info ) => {
        if ( error ) {
          reject( error );
        } else {
          resolve( info );
        }
      } );
    } );
  }
}

module.exports = NodemailerSMTP;
