class SMTPMailer {
  constructor( host, port, username, password ) {
    this.host = host
    this.port = port
    this.username = username
    this.password = password 
 }
  
  async check() {
    if ( !this.checkConnection ) {
      throw new Error( 'No checkConnection method defined at SMTPMailer!' )
    }
    const result = await this.checkConnection()
    return result
  }
  
  async send( message ) {
    if ( !this.sendMail ) {
      throw new Error( 'No sendMail method defined at SMTPMailer!' )
    }
    const result = await this.sendMail( message )
    return result
  }
}

module.exports = SMTPMailer