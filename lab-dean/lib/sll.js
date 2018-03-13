'use strict';

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(key, value) {
    if(!value) return null;
    if(!key) return null;
    let node = new Node(key, value);
    if(!this.head) {
      this.head = node;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = node;
    return this;
  }
}

module.exports = SLL;