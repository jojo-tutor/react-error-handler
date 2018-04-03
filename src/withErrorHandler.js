import React from 'react'
import ErrorHandler from './ErrorHandler'

const withErrorHandler = (ChildComponent, onError, errorElement) => props => (
  <ErrorHandler onError={onError} errorElement={errorElement}>
    <ChildComponent {...props} />
  </ErrorHandler>
)

export default withErrorHandler
