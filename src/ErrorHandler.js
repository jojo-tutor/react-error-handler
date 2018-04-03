import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorHandler extends PureComponent {
  state = {
    hasError: false
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    this.props.onError(error, info)
  }
  render() {
    if (this.state.hasError) {
      return this.props.errorElement
    }
    return this.props.children
  }
}

ErrorHandler.defaultProps = {
  onError: () => {},
  errorElement: (<h1>Oh no, Something went wrong! :( </h1>)
}

ErrorHandler.propTypes = {
  onError: PropTypes.func,
  errorElement: PropTypes.element
}

export default ErrorHandler
