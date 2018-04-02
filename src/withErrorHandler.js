import React, { PureComponent } from 'react'

function withErrorHandler(ChildComponent) {
  return class extends PureComponent {
    state = {
      hasError: false
    }
    componentDidCatch(error, info) {
      this.setState({ hasError: true })
      console.error(error, info)
    }
    render() {
      if (this.state.hasError) {
        return (<h1>Oh no, Something went wrong! :(</h1>)
      }
      return (<ChildComponent {...this.props} />)
    }
  }
}

export default withErrorHandler
