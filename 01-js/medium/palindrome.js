/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  // Remove all spaces and special characters from a string :
  str = str.replace(/[^a-zA-Z]/g, '');  // .replace(keep, replace)

  // convert to lowercase :
  str = str.toLowerCase();
  
  // Reverse the string :
  let reversed_str = str.split("").reverse().join("");

  return (str===reversed_str);
}


module.exports = isPalindrome;


// Test Cases : All Passed