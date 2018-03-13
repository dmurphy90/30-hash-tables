'use strict';

const SLL = require('./sll');

class HashTable {
  constructor(size) {
    this.size = size || 5;
    this.memory = [...Array(this.size)];
  }

  hashKey(key) {
    if(!key) return 'Error, key missing';
    if(typeof key !== 'string') return 'Error, key must be a string';

    let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;

    return hash;
  }

  set(key, value) {
    if(!key) return 'Error, key missing';
    if(!value) return 'Error, value missing';

    let index = this.hashKey(key);
    let sll = new SLL();

    !this.memory[index] ?
      this.memory[index] = sll.insertEnd(key, value) :
      this.memory[index].insertEnd(key, value);
  }

  get(key) {
    if(!key) return 'Error, key missing';
    if(typeof key !== 'string') return 'Error, key must be a string';

    let hash = this.hashKey(key);
    let index = this.memory[hash];

    let curr = index.head;

    while(curr) {
      if(curr.key === key) return curr;
      curr = curr.next;
    }
    return 'Error, this key does not exist in table';
  }

  remove(key) {
    if(!key) return 'Error, key missing';
    if(typeof key !== 'string') return 'Error, key must be a string';

    let index = this.memory[this.hashKey(key)];
    if(!index.head) return 'Error, this key does not exist in table';

    let prev;
    let curr = index.head;

    if(index.head.key === key) delete index.head;

    while(curr.next) {
      prev = curr;
      curr = curr.next;
      if(curr.key === key) {
        prev.next = curr.next;
      }
    }
  }
}

module.exports = HashTable;