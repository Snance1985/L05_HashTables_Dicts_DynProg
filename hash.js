//Hash Tables/ Hash Maps

//Hash Table
/* Notes

*/
//Example Implementation of a Hash Table:
// Here is our Hash Table:
class HashTable {
    constructor(size = 10) {
      this.values = {}; //store key-value pairs in its index
      this.length =  0; //length of values
    }
   }
   
   calculateHash(key) ;{
    return key.toString().length % this.size;
}

// This is a trivial hash that would result in collisions for large data sets, but for our example, it will work just fine.

// Let's test this out by creating a new hash table and searching for an item:

// Create a basic Hash table
//Function to calculate the hash of an item:
class HashTable {
constructor() {
this.values = {}; //store key-value pairs in its index
this.length = 0 // length of hash table
}

// Let's create a simple hash function that determines the key based on a characteristic of the string, such as the length. 

// Simple CalculateHash function that determines the key based on length of string
calculateHash(key){
return key.toString().length;
}

put(key, value) {
const hash = this.calculateHash(key);
// Checks if hash value exists or not:
if (!this.values.hasOwnProperty(hash)) {
  this.values[hash] = {};
}
if (!this.values[hash].hasOwnProperty(key)) {
   this.length++;
}
// Add the hash element
this.values[hash][key] = value;
}

get(key) {
 const hash = this.calculateHash(key);
 if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
   return this.values[hash][key];
 } else {
   return null;
 }
}
}

//create object of type hash table
const hash_table = new HashTable();
//add data to the hash table
hash_table.put("EEE", "6")
hash_table.put("FFF", "9")
hash_table.put("A", "2")
hash_table.put("C", "4")
hash_table.put("BB", "1")
hash_table.put("DD", "6")

console.log(hash_table)
// Let's try searching for a string in the hash table
console.log("Search for the string A:")
console.log(hash_table.get("A"))

/* The output:
HashTable {
values: {
'1': { A: '2', C: '4' },
'2': { BB: '1', DD: '6' },
'3': { EEE: '6', FFF: '9' }
},
length: 6
}
Search for the string A:
2
*/

//Put Operation on the Hash Table
/* Notes
The put(key, value) method is used to insert new data into a Hash Table.
The key is used to index the data and the value is the data to be stored.
*/
//Example of how to use the put(key, value) method:
// create a new hash table
const hashTable = new Map();

// insert data into the hash table
hashTable.set('John Smith', '555-1234');
hashTable.set('Jane Doe', '555-5678');
hashTable.set('Bob Johnson', '555-9012');
/* Notes
In this example, we first create a new Hash Table using the Map() constructor.
Then, we use the set() method to insert data into the Hash Table.
The first parameter is the key and the second parameter is the value.
We can insert as many key-value pairs as we need.
*/

//Get Operation on the Hash Table
/* Notes
The get(key) method is a core component of Hash Tables that allows you to retrieve data based on a specific key.
To use this method, you would pass the key of the element you wish to retrieve as the argument to the get method.
*/
//Example of how to use the get method:
// Create a new Hash Table instance
const hashTable1 = new Map();

// Add elements to the Hash Table
hashTable1.set('apple', 5);
hashTable1.set('banana', 10);
hashTable1.set('cherry', 20);

// Retrieve the value associated with the 'apple' key
const appleValue = hashTable1.get('apple');
console.log(appleValue); // Output: 5

// Retrieve the value associated with the 'banana' key
const bananaValue = hashTable1.get('banana');
console.log(bananaValue); // Output: 10

// Retrieve the value associated with a non-existent key
const nonExistentValue = hashTable1.get('orange');
console.log(nonExistentValue); // Output: undefined
/* Notes
In the example above, we create a new Hash Table instance using the Map constructor.
We then add three elements to the Hash Table using the set method, where the keys are 'apple', 'banana', and 'cherry', and the values are 5, 10, and 20 respectively.
We then use the get method to retrieve the values associated with the 'apple' and 'banana' keys and store them in the appleValue and bananaValue variables respectively.
Finally, we attempt to retrieve the value associated with a non-existent key 'orange', which returns undefined.
Overall, the get method is a simple and efficient way to retrieve data from a Hash Table based on a specific key.
*/

//Deletion Operation on the Hash Table
/*Notes

*/
//Example remove elements function on hash table:


remove(key) ;{
    let hashKey = this.hash(key);
 
    for (let i = 0; i < this.values[hashCode].length; i++) {
       // Find the element in the chain
       if (this.values[hashKey][i].key === key) {
          this.values[hashKey].splice(i, 1);
          return true
       }
    }
    return false;
 }
 
 //create object of type hash table
 const hash_table2 = new HashTable();
 //add data to the hash table
 hash_table2.put("EEE", "6")
 hash_table2.put("FFF", "9")
 hash_table2.put("A", "2")
 hash_table2.put("C", "4")
 hash_table2.put("BB", "1")
 hash_table2.put("DD", "6")
 
 console.log(hash_table2)
 // Let's try searching for a string in the hash table
 console.log("Search for the string A:")
 console.log(hash_table2.remove("A"))
 
/* The output:
 HashTable {
   values: {
     '1': { C: '4' },
     '2': { BB: '1', DD: '6' },
     '3': { EEE: '6', FFF: '9' }
   },
   length: 5
 }
*/
 
//Creating Custom Hash Functions in JavaScript
/*Notes
Creating custom hash functions in JavaScript is an essential skill when working with hash tables.
1 The first step in creating a custom hash function is to choose an algorithm.
There are several algorithms available such as the arithmetic modular method, the folding method, and the multiplication method.
It is essential to choose an algorithm that suits the data type you are working with and the size of the hash table.
2 Determine the size of the hash table.
The size of the hash table determines the number of buckets in the table.
It is best to choose a prime number for the size of the hash table to ensure that the hash function produces a well-distributed set of keys.
3 Convert the key into a numeric value.
The hash function takes the key and converts it into a numeric value.
The numeric value should be unique for each key.
4 Implement the hash function algorithm.
Implement the hash function algorithm based on the chosen algorithm.
This function should take the key and convert it into a unique numeric value.
5 Map the numeric value to an index.
The final step is to map the numeric value to an index in the hash table.
This can be done by taking the numeric value modulo the size of the hash table.
The result will be an index between 0 and the size of the hash table minus one.
*/
//Example of a custom hash function that uses the arithmetic modular method:
function hashFunction(key, size) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash % size;
  }  
/*Notes
In this example, the hash function takes in a key and the size of the hash table.
The function initializes the hash value to zero and then loops through each character in the key.
The hash value is then updated using the arithmetic modular method.
Finally, the function returns the hash value modulo the size of the hash table.
*/

//Handling Collisions
/*Notes
One issue that can arise with Hash Tables are collisions.
Collisions occur when two or more keys are hashed to the same index in the Hash Table.
When a collision happens, there are several ways to handle it:
1 Separate Chaining
In this method, each index in the Hash Table contains a linked list.
When a collision occurs, the new key-value pair is added to the linked list at that index.
When searching for a key-value pair, the linked list at the index is traversed to find the matching key.
This is the most common method used to handle collisions in Hash Tables.
2 Open Addressing
In this method, when a collision occurs, a new index is calculated based on the original index and a pre-defined sequence of offsets.
The new index is then checked to see if it is empty.
If it is, the new key-value pair is inserted at that index.
If it is not empty, the process is repeated until an empty index is found.
When the put function is called, Hash Tables will place a new entry into the 'next available' bucket if the new Key entry collides with another.
*/
//Example of how to separate chaining can be implemented:
class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
  
      for (let i = 0; i < size; i++) {
        this.buckets[i] = new LinkedList();
      }
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    put(key, value) {
      const index = this.hash(key);
      this.buckets[index].insert(new Node(key, value));
    }
  
    get(key) {
      const index = this.hash(key);
      const current = this.buckets[index].getHead();
  
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
  
      return null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(node) {
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
  
    getHead() {
      return this.head;
    }
  }
  
  class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
/*Notes
In this example, we create a Hash Table with a specified size.
Each index in the Hash Table is initialized with an empty linked list.
When a new key-value pair is inserted using the put(key, value) method, the hash(key) method is used to calculate the index for the key.
The new Node object containing the key-value pair is then inserted into the linked list at that index using the insert(node) method.
When searching for a value using the get(key) method, the hash(key) method is again used to calculate the index for the key.
The linked list at that index is then traversed to find the matching key-value pair. If the key is not found, null is returned.
Separate chaining is a simple and efficient way to handle collisions in Hash Tables.
By storing the key-value pairs in linked lists at each index, we can ensure that all keys are stored and can be retrieved, even if collisions occur.
*/

//Simple Example HashMap with Map

//Example of using a JavaScript Map to create a hashmap:
// create a new Map
let myMap = new Map();

// set key-value pairs in the map
myMap.set('apple', 1);
myMap.set('banana', 2);
myMap.set('cherry', 3);

// get the value of a specific key
console.log(myMap.get('banana')); // outputs 2

// check if a key exists in the map
console.log(myMap.has('cherry')); // outputs true

// delete a key-value pair from the map
myMap.delete('apple');

// loop over all key-value pairs in the map
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

// convert the Map to an array of key-value pairs
let mapToArray = Array.from(myMap);
console.log(mapToArray); // outputs [['banana', 2], ['cherry', 3]]
/* Notes
In this example, we create a new Map object called myMap.
We use the set() method to add key-value pairs to the map, and the get() method to retrieve the value of a specific key.
We also use the has() method to check if a key exists in the map, and the delete() method to remove a key-value pair from the map.
We then loop over all key-value pairs in the map using a for...of loop, and convert the map to an array of key-value pairs using the Array.from() method.
*/

//More Practical Example
/* Notes
Let's say you're building a web application that stores user data.
You want to be able to quickly retrieve user information given their unique email address.
One way to do this is by using a Hash Table, which can be implemented using JavaScript's built-in Map data structure.
*/
//Example of how you could use a Map to store and retrieve user information:
// Create a new Map to store user data
const users = new Map();

// Add some users to the Map
users.set("john@example.com", { name: "John Smith", age: 30 });
users.set("jane@example.com", { name: "Jane Doe", age: 25 });
users.set("bob@example.com", { name: "Bob Johnson", age: 40 });

// Retrieve user information using their email address
const john = users.get("john@example.com");
console.log(john); // { name: "John Smith", age: 30 }

const jane = users.get("jane@example.com");
console.log(jane); // { name: "Jane Doe", age: 25 }
/* Notes
In this example, the users Map is used as a Hash Table to store user information, with the email address acting as the key and an object containing the user's name and age as the value.
The set() method is used to add new users to the Map, while the get() method is used to retrieve a user's information given their email address.
*/