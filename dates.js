// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction(a, b) {
  a = a.getTime() / (1000 * 60);
  b = b.getTime() / (1000 * 60);
  return Math.abs(a - b) <= 60;
}

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction1(a, b) {
  return Math.abs(a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24);
}

// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction2(a, b) {
  return a.getTime() < b.getTime();
}

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function myFunction3(a, b) {
  return a.getTime() + b * 24 * 60 * 60 * 1000;
}

// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction4(a, b) {
  dif = Math.abs(a.getTime() - b.getTime());
  let obj = {
    hrs: Math.floor(dif / 1000 / 60 / 60),
    min: Math.floor(Math.abs(a.getMinutes() - b.getMinutes())),
    sec: Math.floor(Math.abs(a.getSeconds() - b.getSeconds())),
  };
  return obj;
}

// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction5(date) {
  let minutes = date.getMinutes();
  minutes = minutes + 15 - (minutes % 15);
  return minutes < 60 ? minutes : 0;
}

console.log(myFunction5(new Date(2021, 8, 10, 15, 22, 00)));
