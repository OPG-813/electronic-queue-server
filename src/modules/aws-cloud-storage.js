const CloudStorage = require( '../core/cloud-storage' );
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require( '@aws-sdk/client-s3' );
const config = require( '../config' ).cloudStorage;
const { ServerSideError } = require( '../core/error' );

class MCSCloudStorage extends CloudStorage {
  constructor() {
    super();
    this.client = new S3Client( {
      region: config.CLOUD_REGION,
      endpoint: {
        hostname: config.CLOUD_HOST,
        path: '',
        protocol: config.CLOUD_PROTOCOL
      } } );
  }

  async putToBucket( path, stream ) {
    const command = new PutObjectCommand( { Bucket: this.bucketName, Key: path, Body: stream } );
    const response = await this.client.send( command );
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      return true;
    } else {
      throw new ServerSideError( 'Problem with file upload to cloud.', response );
    }
  }

  async getFromBucket( path ) {
    const command = new GetObjectCommand( { Bucket: this.bucketName, Key: path } );
    const response = await this.client.send( command );

    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      return response.Body;
    } else {
      throw new ServerSideError( `Problem with file get from cloud. File name: ${ path }`, response );
    }
  }

  async deleteFromBucket( path ) {
    const command = new DeleteObjectCommand( { Bucket: this.bucketName, Key: path } );
    const response = await this.client.send( command );
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 204 ) {
      return true;
    } else {
      throw new ServerSideError( `Problem with file delete from cloud. File name: ${ path }`, response );
    }
  }

}

module.exports = MCSCloudStorage;
