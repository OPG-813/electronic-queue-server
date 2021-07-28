const nodemailer = require( 'nodemailer' );
const SMTPMailer = require( '../core/mailer.js' );

class NodemailerSMTP extends SMTPMailer {
  constructor( host, port, username, password ) {
    super( host, port, username, password );
    this.transport = nodemailer.createTransport( { host, port, auth: { user: username, pass: password } } );
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
