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

let three = {
  key: 'rain',
  value: 'wet',
};

describe('Get Method', () => {
  let test = new Hash(5);
  test.set(one.key, one.value);
  test.set(two.key, two.value);
  test.set(three.key, three.value);

  describe('Valid Input', () => {
    it('Should return a node', () => {
      expect(test.get('dog')).toBeInstanceOf(Object);
    });
    it('Should return the node belonging to the key', () => {
      expect(test.get('dog').value).toBe('argument');
    });
    it('Should iterate through a linked list to find the key', () => {
      expect(test.memory[4].head.key).toBe('dog');
    });
  });
  describe('Invalid input', () => {
    it('Should return an error if no key is provided', () => {
      expect(test.get()).toMatch(/Error/);
    });
  });
});