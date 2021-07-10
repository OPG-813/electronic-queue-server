const getModelFields = ( model, passedObject, needRequired = true ) => {
  const result = {}
  const missing = []

  for( const field of model.fields ) {
    if ( passedObject.hasOwnProperty( field.name ) ) {
      result[ field.name ] = passedObject[ field.name ]
    } else if ( field.required === true && needRequired === true ) {
      missing.push( field.name )
    }
  }

  if ( missing.length !== 0 ) {
    const error = new Error( `${ missing.join( ',' ) }` )
    error.code = 131
    throw error
  } else {
    return result
  }
}

const getModelFilters = ( model, passedObject ) => {
  const result = {}

  for( const filter of model.filters ) {
    if ( passedObject.hasOwnProperty( filter ) ) {
      result[ filter ] = passedObject[ filter ]
    }
  }

  return result
}

module.exports = Object.freeze( { getModelFields, getModelFilters } )
