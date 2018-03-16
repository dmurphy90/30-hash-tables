'use strict';

const Hash = require('../lib/hash-table');
require('jest');

describe('HashTable Constructor', () => {
  let test = new Hash(20);

  it('Should create a hash table with a memory of 20 indexes', () => {
    expect(test.memory.length).toEqual(20);
  });
  it('Should create an object with size and memory properties', () => {
    expect(test).toHaveProperty('size');
    expect(test).toHaveProperty('memory');
  });
});