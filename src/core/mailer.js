const config = require( '../config' ).smtp;

class SMTPMailer {
  constructor() {
    this.host = config.SMTP_HOST;
    this.port = config.SMTP_PORT;
    this.username = config.SMTP_USERNAME;
    this.password = config.SMTP_PASSWORD;
  }

  async check() {
    const result = await this.checkConnection();
    return result;
  }

  async send( message ) {
    const result = await this.sendMail( message );
    return result;
  }
}

module.exports = SMTPMailer;
