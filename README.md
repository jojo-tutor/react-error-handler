# react-error-handler
![Wercker](https://img.shields.io/wercker/ci/wercker/docs.svg)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

A higher order function that handles error boundary in React 16+ components. No additional dependecies needed!

## About
A component wrapper to handle error handling within a child component.

## Demonstration
CodePen:
 > https://codepen.io/jojo-tutor/pen/GxOemZ

Herokuapp:
 > https://hoc-error-boundary.herokuapp.com

## Installing
To install the module, follow the steps below:

```
npm i react-error-handler --save
```

## Usage
Ex. 1:
```
import { ErrorHandler } from 'react-error-handler';
<ErrorHandler onError={(error, info) => console.log(error, info)} errorElement={<div>I'm custom error element!</div>}>
    <WrappedComponent />
</ErrorHandler>
```

Ex. 2:
```
import React, { Component } from 'react';
import { withErrorHandler } from 'react-error-handler';

class Example2 extends Component {
  render() {
    return (
      <div>Example 2</div>
    );
  }
}
export default withErrorHandler(Example2);
```

Ex. 3
```
import React, { Component } from 'react';
import { withErrorHandler } from 'react-error-handler';

const FunctionalComponent1 = (props) => {
  return (
    <div>
      Example 3
    </div>)
}

class About extends Component {
  render() {
    const WrappedFunctional1 = withErrorHandler(FunctionalComponent1)
    return (
      <div className='example3'>
        <WrappedFunctional1 />
      </div>
    );
  }
}
```

## Authors
**Jojo E. Tutor**

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Enjoy :)
