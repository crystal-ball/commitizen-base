'use strict'

const { longest, padRight } = require('./utils.js')

describe('longest', () => {
  it('When no fields are present, then longest is 0', () => {
    expect(longest({})).toBe(0)
  })

  it('When fields are present, then it returns longest value', () => {
    expect(longest({ one: 'one', seven: 'seven' })).toBe(5)
  })
})

describe('padRight', () => {
  it('When called, then it pads the value right with spaces', () => {
    expect(padRight('one', 8)).toBe('one     ')
  })
})
