// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {
  return str.slice(str.length - 3, str.length);
}
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction1(a) {
  return a.slice(0, a.length / 2);
}
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction2(a) {
  return a.slice(0, a.length - 3);
}

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction3(a, n) {
  return a[n - 1];
}

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction4(a, b) {
  return (a * b) / 100;
}
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction4(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction5(a) {
  return !(a % 2);
}

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction6(a, b) {
  let count = 0;
  while (b.indexOf(a) != -1) {
    count++;
    b = b.replace(a, "");
  }
  return count;
}

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction7(a) {
  return a == Math.floor(a);
}

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction8(a, b) {
  return a < b ? a / b : a * b;
}

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction9(a, b) {
  return a.includes(b) ? b + a : a + b;
}
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction10(a) {
  a = a.toString().split("");
  return a.map((element) => parseInt(element));
}

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction11(a, b) {
  a = a[0].toUpperCase() + a.slice(1);
  return (a + b.split("").reverse().join("")).replace("%", "");
}

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction12(a) {
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      a++;
      i = 2;
    }
  }
  return a;
}

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction13(x, y) {
  while (x % y) x++;
  return x;
}

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction14(a, b) {
  let str = "";
  while (a.length > 3) {
    str = b + a.slice(-3) + str;
    a = a.slice(0, -3);
  }

  return a + str;
}

let a = "k";
console.log(parseInt(a));
