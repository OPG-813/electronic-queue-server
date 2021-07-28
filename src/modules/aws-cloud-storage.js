const cloudStorage = require( '../core/cloud-storage' );
const { getMD5Hash } = require( '../core/common' );
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require( '@aws-sdk/client-s3' );

class MCSCloudStorage extends cloudStorage {
  constructor( bucketName ) {
    super( bucketName );
    this.client = new S3Client( {
      region: 'us-east-1',
      endpoint: {
        hostname: 'ib.bizmrg.com',
        path: '',
        protocol: 'https'
      } } );
  }

  async putToBucket( path, data ) {
    const fileHash = getMD5Hash( data );
    const command = new PutObjectCommand( { Bucket: this.bucketName, Key: path, Body: data } );
    const response = await this.client.send( command );
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      if ( response.ETag && response.ETag.substring( 1, response.ETag.length - 1 ) === fileHash ) {
        return true;
      } else if ( !response.ETag ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async getFromBucket( path ) {
    const command = new GetObjectCommand( { Bucket: this.bucketName, Key: path } );
    const response = await this.client.send( command );

    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      const data = [];
      for await ( const chunk of response.Body  ) {
        data.push( chunk );
      }
      return Buffer.concat( data );
    } else {
      return '';
    }
  }

  async deleteFromBucket( path ) {
    const command = new DeleteObjectCommand( { Bucket: this.bucketName, Key: path } );
    const response = await this.client.send( command );
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 204 ) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = MCSCloudStorage;
