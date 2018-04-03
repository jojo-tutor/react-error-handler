import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

function withErrorHandler(ChildComponent) {
  return class extends PureComponent {
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
      return (<ChildComponent {...this.props} />)
    }
  }
}

withErrorHandler.defaultProps = {
  onError: () => {},
  errorElement: (<h1>Oh no, Something went wrong! :( </h1>)
}

withErrorHandler.propTypes = {
  onError: PropTypes.func,
  errorElement: PropTypes.element
}

export default withErrorHandler
