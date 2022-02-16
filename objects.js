// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction(obj) {
  return obj["country"];
}

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction1(a, b) {
  return b in a;
}

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction2(a, b) {
  const obj = {};
  obj[a] = b;
  return obj;
}

// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction3(a) {
  return Object.keys(a);
}

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction4(obj) {
  for (key in obj) {
    if (obj[key].replace(" ", "") == "") {
      obj[key] = null;
    }
  }
  return obj;
}

// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction5(a) {
  let sum = 0;
  for (key in a) {
    sum += a[key];
  }
  return sum;
}

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction6(obj) {
  delete obj["b"];
  return obj;
}

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction7(a, b) {
  for (key in a) {
    a[key] *= b;
  }
  return a;
}

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction8(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let obj2 = {};
  for (let i = 0; i < keys.length; i++) {
    obj2[values[i]] = keys[i];
  }
  return obj2;
}

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction10(obj) {
  let { fn, ln, weight, size, rest } = obj;
  console.log(weight);
  let obj2 = {};
  if (weight !== undefined) obj2["weight"] = weight + "kg";
  if (size !== undefined) obj2["size"] = size + "cm";
  obj2["fn"] = fn;
  obj2["ln"] = ln;

  return obj2;
}

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function myFunction11(arr, str) {
  arr.forEach((obj) => {
    obj["continent"] = str;
  });
  return arr;
}

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
function myFunction12(a) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    a[i] in obj ? obj[a[i]]++ : (obj[a[i]] = 1);
  }
  return obj;
}
