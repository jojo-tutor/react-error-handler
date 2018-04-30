'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ErrorHandler = require('./ErrorHandler');

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withErrorHandler = function withErrorHandler(ChildComponent, errorElement, onError) {
  return function (props) {
    return _react2.default.createElement(
      _ErrorHandler2.default,
      { errorElement: errorElement, onError: onError },
      _react2.default.createElement(ChildComponent, props)
    );
  };
};

exports.default = withErrorHandler;