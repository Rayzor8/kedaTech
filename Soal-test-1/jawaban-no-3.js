function palindrome(str) {
  const lowerCaseInput = str.toLowerCase();
  const reverseStr = lowerCaseInput.split("").reverse().join("");
  return reverseStr === lowerCaseInput;
}

module.exports = palindrome