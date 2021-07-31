const config = require( '../config' ).cloudStorage;

class CloudStorage {
  constructor() {
    this.bucketName = config.BUCKET_NAME;
  }

  async put( path, stream ) {
    return this.putToBucket( path, stream );
  }

  async get( path ) {
    return this.getFromBucket( path );
  }

  async remove( path ) {
    return this.deleteFromBucket( path );
  }
}

module.exports = CloudStorage;
