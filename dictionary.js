//Dictionaries

//Introduction to Dictionaries
/* Notes

*/
//Example of a dictionary:
var dict_example = {
    name: "Sally",
    age: 50,
    role: "software engineer"
  };
  
  const dict_example = new Object();
  dict_example[name] = "Julia";
  dict_example[age] = 36;
  console.log(dict_example);
  
  /*Best for accessing both keys and their values*/
  for (const [key, value] of person.entries()) {
  console.log(key + ": " + value)
  }
  /*Best for accessing only the keys*/
  for (const key of person.keys()) {
  console.log(key)
  }
  /*Best for accessing only the values*/
  for (const value of person.values()) {
  console.log(value)
  };  
/* Notes

*/

/* Notes

*/
//Example of a dictionary made with a Map:
const dict_example = new Map();
dict_example.set("name","Tom");
dict_example.set("age", 47);
console.log(dict_example);

person.has("Tom") /*true*/
person.size
for (const key of Object.keys(person)) {
console.log(key + ":" + person[key])
};
/* Notes

*/

//How dictionaries differ from arrays and objects in JavaScript
/* Notes

*/

//How to use Object.keys() and Object.values() methods to retrieve keys and values from a dictionary
/* Notes

*/
//Example Object.keys() dictionary:
const dictionary = {
    apple: 'A fruit that grows on trees and is often red or green in color',
    banana: 'A yellow fruit with a soft flesh and a curved shape',
    orange: 'A citrus fruit with a tough, bright orange skin and juicy pulp',
  };
  
  const keys = Object.keys(dictionary);
  console.log(keys); // Output: ["apple", "banana", "orange"]  
/* Notes

*/

/* Notes

*/
//
const dictionary1 = {
    apple: 'A fruit that grows on trees and is often red or green in color',
    banana: 'A yellow fruit with a soft flesh and a curved shape',
    orange: 'A citrus fruit with a tough, bright orange skin and juicy pulp',
  };
  
  const values = Object.values(dictionary1);
  console.log(values); // Output: ["A fruit that grows on trees and is often red or green in color", "A yellow fruit with a soft flesh and a curved shape", "A citrus fruit with a tough, bright orange skin and juicy pulp"]  
/* Notes

*/

//Practical Examples of Dictionaries
/* Notes

*/
//
const config = {
    API_URL: 'https://api.example.com',
    MAX_RESULTS: 50,
    ENABLE_FEATURE_A: true,
    ENABLE_FEATURE_B: false,
    DEFAULT_LANGUAGE: 'en',
  };
  
  // Retrieve the value of a configuration setting
  const apiUrl = config.API_URL;
  
  // Update a configuration setting
  config.MAX_RESULTS = 100;
  
/* Notes

*/

//
/* Notes

*/
//
const userPreferences = {
    language: 'en',
    theme: 'dark',
    fontSize: '16px',
    showNotifications: true,
  };
  
  // Retrieve the user's preferred language
  const language = userPreferences.language;
  
  // Update the user's font size preference
  userPreferences.fontSize = '18px';  
/* Notes

*/

//
/* Notes

*/
//
const productNamesById = {
    'p1': 'Product A',
    'p2': 'Product B',
    'p3': 'Product C',
  };
  
  // Retrieve the name of a product by its ID
  const productName = productNamesById['p1'];
  
  // Map an array of product IDs to an array of product names
  const productIds = ['p1', 'p2', 'p3'];
  const productNames = productIds.map(id => productNamesById[id]);  
/* Notes

*/