/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp or "Debit Card" -> "Bad Credit"

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  /* 
    - converting to lowercase
    - then split the string into array
    - then sort the array based on character position

    For 'silent'/'listen' -> sorted: 'eilnst'
  */

  const sort_str1 = str1.toLowerCase().split("").sort().join("");
  const sort_str2 = str2.toLowerCase().split("").sort().join("");


  return (sort_str1===sort_str2);
}

module.exports = isAnagram;


/* 
  Run the test cases :
    - Go to the 01.js
    - run: `npm run test-anagram`
    - install jest
*/
// Test cases : All Passed