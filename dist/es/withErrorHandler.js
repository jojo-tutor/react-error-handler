import React from 'react';
import ErrorHandler from './ErrorHandler';

var withErrorHandler = function withErrorHandler(ChildComponent, errorElement, onError) {
  return function (props) {
    return React.createElement(
      ErrorHandler,
      { errorElement: errorElement, onError: onError },
      React.createElement(ChildComponent, props)
    );
  };
};

export default withErrorHandler;