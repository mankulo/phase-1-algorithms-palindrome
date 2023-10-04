function isPalindrome(word) {
  // Write your algorithm here


  const palindromeWord = palindrome(word);
  if (word === palindromeWord) {
    return true;
  } else {
    return false;
  }
}

function palindrome(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
 pass abba as an argument when invoking isPalindrome
 and use the if condition and logical operators. 
*/

/*
  Add written explanation of your solution here
  i passed abba as an argument when invoking the function isPalindrome.
  I then used if and else condtions along with the logical operators (strict equality)
  to compare whether the value abba is a palindrome or not
*/

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
