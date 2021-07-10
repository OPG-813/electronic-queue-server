module.exports = {
  BYTE: 256,
  TOKEN: 'token',
  TOKEN_LENGTH: 32,
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA: this.ALPHA_UPPER + this.ALPHA_LOWER,
  DIGIT: '0123456789',
  ALPHA_DIGIT: this.ALPHA + this.DIGIT,
  EPOCH: 'Thu, 01 Jan 1970 00:00:00 GMT',
  FUTURE: 'Fri, 01 Jan 2100 00:00:00 GMT',
  LOCATION: 'Path=/; Domain',
  COOKIE_DELETE: `${ this.TOKEN }=deleted; Expires=${ this.EPOCH }; ${ this.LOCATION }=`,
  COOKIE_HOST: `Expires=${ this.FUTURE }; ${ this.LOCATION }`
};
