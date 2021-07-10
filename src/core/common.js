const crypto = require( 'crypto' )

const getRandomHashSHA1 = () => {
  let timestamp = String( Date.now() )
  let randomNumber = String( Math.random() )
  return crypto.createHash( 'sha1' ).update( timestamp + randomNumber ).digest( 'hex' )  
}

const getMD5Hash = ( buffer ) => {
  return crypto.createHash( 'md5' ).update( buffer ).digest( 'hex' )
}

module.exports = { getRandomHashSHA1, getMD5Hash }