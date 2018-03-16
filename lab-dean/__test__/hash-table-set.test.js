'use strict';

const Hash = require('../lib/hash-table');
require('jest');

let one = {key: 'tim', val: '1'};

describe('Set Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(one.key, one.val);


  describe('Valid input', () => {
    it('Should see if a node object was made.', () => {
      expect(hashTable.memory[0]).toBeInstanceOf(Object);
    });
    it('Should check to see if the item was stored in the hashtable', () => {
      expect(hashTable.memory[0].head.value).toBe('1');
    });
  });


  describe('Invalid input', () => {
    it('Should return an error if no key or value is passed', () => {
      expect(hashTable.set('testing')).toMatch(/Error/);
    });
    it('Should return an error if no arguments are passed', () => {
      expect(hashTable.set()).toMatch(/Error/);
    });
    it('Should return an error if key is not a string', () => {
      expect(hashTable.set(1)).toMatch(/Error/);
    });
  });
});