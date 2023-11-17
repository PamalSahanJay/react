'use strict';

// const oddTest = require('..');
// const assert = require('assert').strict;

// assert.strictEqual(oddTest(), 'Hello from oddTest');
// console.info('oddTest tests passed');


const {isOdd} = require('../dist/odd-test.js');

test("isOdd", () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(2)).toBe(false)


})