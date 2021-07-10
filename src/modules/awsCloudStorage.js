const cloudStorage = require( '../core/cloudStorage.js' )
const { getMD5Hash } = require( '../core/common.js' )
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require( '@aws-sdk/client-s3' )

class MCSCloudStorage extends cloudStorage {
  constructor( bucketName ) {
    super( bucketName )
    this.client = new S3Client( {
      region: 'us-east-1',
      endpoint: { 
        hostname: 'ib.bizmrg.com',
        path: '',
        protocol: 'https'
     } } ) 
  }
  
  async putToBucket( path, data ) {
    let fileHash = getMD5Hash( data )
    let command = new PutObjectCommand( { Bucket: this.bucketName, Key: path, Body: data } )
    let response = await this.client.send( command )
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      if ( response.ETag && response.ETag.substring( 1, response.ETag.length - 1 ) === fileHash ) {
        return true      
      } else if ( !response.ETag ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  async getFromBucket( path ) {
    let command = new GetObjectCommand( { Bucket: this.bucketName, Key: path } )
    let response = await this.client.send( command )
    
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 200 ) {
      let data = []
      for await ( let chunk of response.Body  ) {
        data.push( chunk )
      }
      return Buffer.concat( data )
    } else {
      return ''
    }
  }
  
  async deleteFromBucket( path ) {
    let command = new DeleteObjectCommand( { Bucket: this.bucketName, Key: path } )
    let response = await this.client.send( command )
    if ( response[ '$metadata' ] && response[ '$metadata' ].httpStatusCode === 204 ) {
      return true
    } else {
      return false
    }
  }
  
}

module.exports = MCSCloudStorage