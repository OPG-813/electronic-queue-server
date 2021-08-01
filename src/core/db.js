
const { Pool, types } = require( 'pg' );
const Logger = require( './logger' );
const logger = new Logger();
const pool = new Pool();
const config = require( '../config' ).db;
const { DataConflict, DataBaseError } = require( './error' );

types.setTypeParser( 1082, ( value ) => value );

class DB {
  constructor() {
    this.operators = [ '>=', '<=', '<>', '>', '<' ];
  }

  where( conditions, firstArgIndex = 1 ) {
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
          }
        }
        if ( value.includes( '*' ) || value.includes( '?' ) ) {
          operator = 'LIKE';
          value = value.replace( /\*/g, '%' ).replace( /\?/g, '_' );
        }
      }
      clause.push( `"${ key }" ${ operator } $${ i++ }` );
      args.push( value );
    }
    return { clause: clause.join( ' AND ' ), args };
  }

  updates( delta, firstArgIndex = 1 ) {
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

  async query( text, params ) {
    try {
      const data = params ? params.join( ',' ) : '';
      const result = await pool.query( text, params );
      logger.sql( `SQL: ${ text } PARAMS: ${ data }` );
      return result.rows;
    } catch ( error ) {
      if ( error.code.startsWith( config.UNIQUE_ERROR_CODE_PREFIX ) ) {
        throw new DataConflict( error.message );
      }
      throw new DataBaseError( error.message );
    }
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

  async select( table, fields = null, conditions = null, orderFields = [ 'id' ], pageOptions = null ) {
    const keys = fields && fields.length ? `"${ fields.join( '", "' ) }"` : '*';
    const sql = `SELECT ${ keys } FROM ${ table }`;
    let whereClause = '';
    let args = [];
    if ( conditions && Object.keys( conditions ) !== 0 ) {
      const whereData = this.where( conditions );
      whereClause = ' WHERE ' + whereData.clause;
      args = whereData.args;
    }
    const orderClause = ` ORDER BY "${ orderFields.join( '", "' ) }"`;
    let limitClause = '';
    if ( pageOptions && pageOptions.page && pageOptions.itemsNumber ) {
      limitClause = ` LIMIT ${ pageOptions.itemsNumber }
       OFFSET ${ ( pageOptions.page - 1 ) * pageOptions.itemsNumber }`;
    }
    const result = await this.query( sql + whereClause + orderClause + limitClause, args );
    return result;
  }

  async update( table, delta = null, conditions = null, returning = [] ) {
    const upd = this.updates( delta );
    const cond = this.where( conditions, upd.args.length + 1 );
    const returnClause = returning.length ? 'RETURNING "' + returning.join( '", "' ) + '"' : '';
    const sql = `UPDATE ${ table } SET ${ upd.clause } WHERE ${ cond.clause } ${ returnClause }`;
    const args = [ ...upd.args, ...cond.args ];
    const result = await this.query( sql, args );
    return result;
  }

  async delete( table, conditions = null, returning = [] ) {
    const cond = this.where( conditions );
    const returnClause = returning.length ? 'RETURNING "' + returning.join( '", "' ) + '"' : '';
    const sql = `DELETE FROM ${ table } WHERE ${ cond.clause } ${ returnClause }`;
    const result = await this.query( sql, cond.args );
    return result;
  }
}

module.exports = DB;
