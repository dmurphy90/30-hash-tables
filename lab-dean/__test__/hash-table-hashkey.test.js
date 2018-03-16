'use strict';

const Hash = require('../lib/hash-table');
require('jest');

let one = {key: 'tim', val: '1'};
let two = {key: 'dog', val: '22'};
let three = {key: 'webstorm', val: '222'};

describe('HashKey testing to see if it works', () => {
  let hashTable = new Hash(5);

  describe('Valid input', () => {
    it('Should create a hash number representing the key', () => {
      expect(hashTable.hashKey(one.key)).toEqual(0);
      expect(hashTable.hashKey(two.key)).toEqual(4);
      expect(hashTable.hashKey(three.key)).toEqual(3);
    });
  });
  describe('Invalid input', () => {
    it('Should return an error if no key is passed', () => {
      expect(hashTable.hashKey()).toMatch(/Error/);
    });
    it('Should return an error if key is not a string', () => {
      expect(hashTable.hashKey(1)).toMatch(/Error/);
    });
  });
});