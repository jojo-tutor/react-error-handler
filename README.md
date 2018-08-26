# react-error-handler [![Twitter](https://img.shields.io/twitter/url/https/github.com/jojo-tutor/react-error-handler.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fjojo-tutor%2Freact-error-handler)

![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)
![npm](https://img.shields.io/npm/v/react-error-handler.svg)
![npm](https://img.shields.io/npm/dm/react-error-handler.svg)


A higher order function that handles error boundary in React 16+ components. No additional module dependecies needed!

## About
A component wrapper to handle error handling within a child component.

## Installing
To install the module:

```
npm i react-error-handler --save
```

## Demonstration
CodePen:
 > https://codepen.io/jojo-tutor/pen/GxOemZ

Herokuapp:
 > https://hoc-error-boundary.herokuapp.com

## Example
 > https://github.com/jojo-tutor/hoc-error-boundary

## To run the Example on local
```
git clone https://github.com/jojo-tutor/hoc-error-boundary.git
cd hoc-error-boundary
npm i
npm start
```

## Usage
Ex. 1:
```jsx
import { ErrorHandler } from 'react-error-handler';

<ErrorHandler
    onError={(error, info) => this.handleError}
    errorElement={<div>I'm custom error element!</div>}
>
    <WrappedComponent />
</ErrorHandler>
```

Ex. 2:
```jsx
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
```jsx
import React, { Component } from 'react';
import { withErrorHandler } from 'react-error-handler';

const FunctionalComponent1 = (props) => {
  return (
    <div>
      Example 3
    </div>)
}

const WrappedFunctional1 = withErrorHandler(FunctionalComponent1)
class About extends Component {
  render() {
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
