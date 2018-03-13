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

describe('Remove Method', () => {
  let test = new Hash(5);
  test.set(one.key, one.value);
  test.set(two.key, two.value);
  test.set(three.key, three.value);

  describe('Valid Input', () => {
    it('Should remove specified node from memory', () => {
      expect(test.get('dog').value).toBe('argument');
      test.remove('dog');
      expect(test.get('dog')).toMatch(/Error/);
    });
    it('Should remove reference from previous node in linked list', () => {
      expect(test.memory[4].head.next.key).toBe('rain');
      test.remove('rain');
      expect(test.memory[4].head.next).toBeNull();
    });
  });
  describe('Invalid input', () => {
    it('Should return an error if no key is provided', () => {
      expect(test.remove()).toMatch(/Error/);
    });
    it('Should return an error if the key is not a string', () => {
      expect(test.remove(1)).toMatch(/Error/);
    });
    it('Should return error if the key does not exist in the table', () => {
      expect(test.remove('hello')).toMatch(/Error/);
    });
  });
});