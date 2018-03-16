# 30 Hash Tables

## Installation 

To install this app fork then clone the repo down to your own machine. Navigate to the directory named ```lab-dean``` and type ```npm i``` to get all of the NPM packages needed for the app.

## Functionality
This app will create a node object, push it through a hash table constructor with the following methods associated with it:

```HashTable```  
```class HashTable {
  constructor(size) {
    this.size = size || 5; 
    this.memory = [...Array(this.size)];
  }
  ```

  ```hashKey``` - generates a key that is a numeric value associated with the hash item

  ```set(key, value)``` - checks the hash table to see if the key already exists on the hash table, and if not assigns that node to the table

  ```get(key)``` - iterates through hash table looking for the specified key and returns that node if it is present

  ```remove(key)``` - iterates through the table looking for the specified key and removes that node and any references to it

## Big O Notation
If the hashkey is only present once in the table then it is an ```O(1)``` lookup, if there are more than one nodes present with that hashkey then it is ```O(n)```

## Tests

* Checks that the constructor creates an object with a size and memory array with indexes equal to the size
* Checks that the set method places a node in memory based on the index
* Checks collision nodes form a linked list
* Checks the get method returns a node
* Checks the remove method properly removes a node and its reference
* Checks all invalid arguments return errors
* Checks if error is returned if key does not exist in table with get and remove method