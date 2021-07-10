class CloudStorage {
  constructor( bucketName ) {
    this.bucketName = bucketName
  }
  
  async put( path, data ) {
    if ( this.putToBucket ) {
      if ( !( data instanceof Buffer ) ) {
        throw new Error( 'Data must be instance of Buffer!' )
      } else {
        return this.putToBucket( path, data )
      }
    } else {
      throw new Error( 'Method putToBucket is not defined!' )
    }
  }
  
  async get( path ) {
    if ( this.getFromBucket ) {
      return this.getFromBucket( path )
    } else {
      throw new Error( 'Method getFromBucket is not defined' )
    }
  }
  
  async remove( path ) {
    if ( this.deleteFromBucket ) {
      return this.deleteFromBucket( path )
    } else {
      throw new Error( 'Method deleteFromBucket is not defined' )
    }
  }
}

module.exports = CloudStorage