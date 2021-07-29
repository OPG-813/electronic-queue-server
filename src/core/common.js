const crypto = require( 'crypto' );

const getRandomHashSHA1 = () => {
  const timestamp = String( Date.now() );
  const randomNumber = String( Math.random() );
  return crypto.createHash( 'sha1' ).update( timestamp + randomNumber ).digest( 'hex' );
};

const getMD5Hash = ( buffer ) => crypto.createHash( 'md5' ).update( buffer ).digest( 'hex' );

const getObjectWithProperties = ( props, object ) => {
  const result = {};
  for ( const prop of props ) {
    if ( Object.prototype.hasOwnProperty.call( object, prop ) ) {
      result[ prop ] = object[ prop ];
    }
  }
  return result;
};

module.exports = { getRandomHashSHA1, getMD5Hash, getObjectWithProperties };
