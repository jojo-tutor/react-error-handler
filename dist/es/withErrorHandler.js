import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';

function withErrorHandler(ChildComponent) {
  return function (_PureComponent) {
    _inherits(_class2, _PureComponent);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || _Object$getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hasError: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'componentDidCatch',
      value: function componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.error(error, info);
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.hasError) {
          return React.createElement(
            'h1',
            null,
            'Oh no, Something went wrong! :('
          );
        }
        return React.createElement(ChildComponent, this.props);
      }
    }]);

    return _class2;
  }(PureComponent);
}

export default withErrorHandler;