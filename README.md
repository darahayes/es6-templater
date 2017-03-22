# es6-templater

[![CircleCI](https://circleci.com/gh/darahayes/es6-templater.svg?style=svg)](https://circleci.com/gh/darahayes/es6-templater)

This is a tiny string interpolation function that mimics the es6 template literal syntax.
It's a very simple function for simple use cases.

### Usage

```js
var template = require('es6-templater')

var result = template('Hello, my name is ${name}. I am from ${country}', {
  name: 'Dara',
  country: 'Ireland'
})

console.log(result)
// 'Hello, my name is Dara'. I am from Ireland'
```

### Linting

Usage of this module will cause `standard` to show `Unexpected template string expression` errors. This is caused by this eslint [rule](http://eslint.org/docs/rules/no-template-curly-in-string) which can be turned off by placing the following comment at the top of your script:

```bash
/* eslint-disable no-template-curly-in-string */
```