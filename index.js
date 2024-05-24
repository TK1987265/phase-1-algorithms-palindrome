function isPalindrome(word) {
  // Write your algorithm here
  const cleanStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}
module.exports = isPalindrome;
/* 
  Add your pseudocode here





/*
  Add written explanation of your solution here
*/
// This function first converts the input string to lowercase and removes all 
// non-alphanumeric characters using a regular expression. Then, it checks if 
// the cleaned string is equal to its reverse by splitting it into an array of
//  characters, reversing the array, and joining it back into a string.
//  Finally, it returns true if the string is a palindrome and false otherwise



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
