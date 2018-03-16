'use strict';

const Hash = require('../lib/hash-table');
require('jest');

let one = {key: 'tim', val: '1'};
let two = {key: 'dog', val: '22'};
let three = {key: 'webstorm', val: '222'};

describe('Remove Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(one.key, one.val);
  hashTable.set(two.key, two.val);
  hashTable.set(three.key, three.val);

  describe('Valid Input', () => {
    it('Should remove the specified node from the table', () => {
      hashTable.remove('tim');
      expect(hashTable.get('tim')).toMatch(/not exist/);
    });
  });


  describe('Invalid input', () => {
    it('Should return an error if no key is provided', () => {
      expect(hashTable.remove()).toMatch(/Error/);
    });
    it('Should return an error if key is not a string', () => {
      expect(hashTable.remove(1)).toMatch(/Error/);
    });
  });
});