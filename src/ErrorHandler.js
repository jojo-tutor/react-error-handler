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
  errorElement: (<h1>Oh no, Something went wrong! :( </h1>),
  onError: () => {}
}

ErrorHandler.propTypes = {
  errorElement: PropTypes.element,
  onError: PropTypes.func
}

export default ErrorHandler
