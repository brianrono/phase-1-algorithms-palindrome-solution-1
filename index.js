// function isPalindrome(word) {
//   // Write your algorithm here
//   const reversed = word.split('').reverse().join(' ');
//   return word === reversed
// }


function reverse(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  if (word === reversedWord){
    return true;
  }else {
    return false;
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(word) {
	const reversedWord = reverse(word)
	 // if the input is the same as the reversed input
	 if (word === reversedword) {
	 	return true	
	 }else {
	 	return false
	 }
}

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
