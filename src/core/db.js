
const { Pool, types } = require( 'pg' )
const logger = require( './logger' )
const pool = new Pool()
const config = require( '../config' ).db;

types.setTypeParser( 1082, ( value ) => {
  return value;
} );

class DB {
  constructor() {
    this.operators = [ '>=', '<=', '<>', '>', '<' ];
  }

  where ( conditions, firstArgIndex = 1 ) {
    const clause = [];
    const args = [];
    let i = firstArgIndex;
    const keys = Object.keys( conditions );
    for ( const key of keys ) {
      let operator = '=';
      let value = conditions[ key ];
      if ( typeof value === 'string' ) {
        for ( const op of this.operators ) {
          const len = op.length;
          if ( value.startsWith( op ) ) {
            operator = op;
            value = value.substring( len );
          };
        };
        if ( value.includes( '*' ) || value.includes( '?' ) ) {
          operator = 'LIKE';
          value = value.replace( /\*/g, '%' ).replace( /\?/g, '_' );
        };
      };
      clause.push( `"${ key }" ${ operator } $${ i++ }` );
      args.push( value );
    };
    return { clause: clause.join( ' AND ' ), args };
  }

  updates ( delta, firstArgIndex = 1 ) {
    const clause = [];
    const args = [];
    let i = firstArgIndex;
    const keys = Object.keys( delta );
    for ( const key of keys ) {
      const value = delta[ key ].toString();
      clause.push( `"${ key }" = $${ i++ }` );
      args.push( value );
    }
    return { clause: clause.join( ', ' ), args };
  }

  async query ( text, params ) {
    try {
      const data = params ? params.join(',') : '';
      logger.sql( `SQL ${ text } PARAMS ${ data }` );
      const result = await pool.query( text, params );
      return result.rows;
    } catch ( error ) {
      const codePrefix = error.code.substring( 0, 2 );
      if ( error.code.startsWith( config.UNIQUE_ERROR_CODE_PREFIX ) ){
        error.code = '1222';
      };
      throw error;
    };
  }

  async insert( table, record, returning = [] ) {
    const keys = Object.keys( record );
    const nums = new Array( keys.length );
    const data = new Array( keys.length );
    let i = 0;
    for ( const key of keys ) {
      data[ i ] = record[ key ];
      nums[ i ] = `$${ ++i }`;
    }
    const fields = keys.join( '", "' );
    const params = nums.join( ', ' );
    const returnClause = returning.length ? 'RETURNING "' + returning.join( '", "' ) + '"' : '';
    const sql = `INSERT INTO ${ table } ("${ fields }") VALUES (${ params }) ${ returnClause }`;
    const result = await this.query( sql, data );
    return result[ 0 ];
  }

  async select( table, fields = [ '*' ] , conditions = null, orderFields = [ 'id' ], pageOptions = null ) {
    const keys = fields.join( '", "' );
    let sql = `SELECT "${ keys }" FROM ${ table }`;
    let whereClause = '';
    let args = [];
    if ( conditions ) {
      const whereData = this.where( conditions );
      whereClause = ' WHERE ' + whereData.clause;
      args = whereData.args;
    }
    const orderClause = ` ORDER BY "${ orderFields.join( '", "' ) }"`;
    let limitClause = '';
    if ( pageOptions && pageOptions.page && pageOptions.itemsNumber ) {
      limitClause = ` LIMIT ${ pageOptions.itemsNumber } OFFSET ${ ( pageOptions.page - 1 ) * pageOptions.itemsNumber }`;
    };
    const result = await this.query( sql + ` ${ join }` + whereClause + orderClause + limitClause, args );
    return result;
  }

  async update( table, delta = null, conditions = null, returning = [] ) {
    const upd = updates( delta );
    const cond = where( conditions, upd.args.length + 1 );
    const returnClause = returning.length ? 'RETURNING "' + returning.join( '", "' ) + '"' : '';
    const sql = `UPDATE ${ table } SET ${ upd.clause } WHERE ${ cond.clause } ${ returnClause }`;
    const args = [ ...upd.args, ...cond.args ];
    const result = await this.query( sql, args );
    return result;
  }

  async delete( table, conditions = null, returning = [] ) {
    const cond = where( conditions );
    const returnClause = returning.length ? 'RETURNING "' + returning.join( '", "' ) + '"' : '';
    const sql = `DELETE FROM ${ table } WHERE ${ cond.clause } ${ returnClause }`;
    const result = await this.query( sql, cond.args );
    return result;
  }
};

module.exports = DB;
