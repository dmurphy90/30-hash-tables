'use strict';

const Hash = require('../lib/hash-table');
require('jest');

let one = {
  key: 'dog',
  value: 'argument',
};

let two = {
  key: 'tim',
  value: 'person',
};


describe('HashKey Method', () => {
  let test = new Hash(5);
  test.set(one.key, one.value);
  test.set(two.key, two.value);

  describe('Valid input', () => {
    it('Should create a key number representing the key', () => {
      expect(test.hashKey(one.key)).toEqual(4);
    });
  });
  describe('Invalid input', () => {
    it('Should return an error if no key is provided', () => {
      expect(test.hashKey()).toMatch(/Error/);
    });
    it('Should return an error if key is not a string', () => {
      expect(test.hashKey(1)).toMatch(/Error/);
    });
  });
});