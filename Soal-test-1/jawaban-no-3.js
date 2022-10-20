function palindrome(str) {
  const lowerCaseInput = str.toLowerCase();
  const reverseStr = lowerCaseInput.split("").reverse().join("");
  return reverseStr === lowerCaseInput;
}

const test = palindrome("RefeR");

console.log(test);
