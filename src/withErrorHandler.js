import React from 'react'
import ErrorHandler from './ErrorHandler'

const withErrorHandler = (
  ChildComponent,
  errorElement,
  onError
) => props => (
  <ErrorHandler errorElement={errorElement} onError={onError}>
    <ChildComponent {...props} />
  </ErrorHandler>
)

export default withErrorHandler
