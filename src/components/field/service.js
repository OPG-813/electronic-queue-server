class FieldService {
  constructor( core ) {
    this.core = core;
  }

  create( data ) {
    return this.core.db.insert( 'AdditionalField', data, [ 'id' ] );
  }

  async get( id ) {
    return ( await this.core.db.select( 'AdditionalField', null, { id } ) );
  }

  list( filters, pages ) {
    return this.core.db.select( 'AdditionalField', null, filters, [ 'id' ], pages );
  }

  async remove( id ) {
    return ( await this.core.db.delete( 'AdditionalField', { id }, [ 'id' ] ) )[ 0 ];
  }

  update( id, updates ) {
    return this.core.db.update( 'AdditionalField', updates, { id }, [ 'id' ] );
  }

  async getType( id ) {
    return ( await this.core.db.select( 'FieldType', null, { id } ) );
  }

  listType( filters, pages ) {
    return this.core.db.select( 'FieldType', null, filters, [ 'id' ], pages );
  }

}

module.exports = FieldService;