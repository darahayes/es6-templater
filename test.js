/* eslint-disable no-template-curly-in-string */

var tape = require('tape')
var template = require('./')

tape('template works as expected with good input', (test) => {
  test.plan(1)
  var result = template('Hello my name is ${name}', {name: 'Dara'})
  test.equal(result, 'Hello my name is Dara')
})

tape('place holder is replaced with empty string if no input is given', (test) => {
  test.plan(1)
  var result = template('Hello my name is ${name}')
  test.equal(result, 'Hello my name is ')
})

tape('place holder is replaced with empty string if empty object is given', (test) => {
  test.plan(1)
  var result = template('Hello my name is ${name}', {})
  test.equal(result, 'Hello my name is ')
})

tape('string is unchanged when plain string is input', (test) => {
  test.plan(1)
  var result = template('Hello my name is Dara', {name: 'Dara'})
  test.equal(result, 'Hello my name is Dara')
})

tape('template throws when invalid syntax is given', (test) => {
  test.plan(1)
  test.throws(() => {
    template('Hello my name is ${%Dara}', {name: 'Dara'})
  })
})

tape('template throws when empty template is given', (test) => {
  test.plan(1)
  test.throws(() => {
    template('Hello my name is ${}', {name: 'Dara'})
  })
})
