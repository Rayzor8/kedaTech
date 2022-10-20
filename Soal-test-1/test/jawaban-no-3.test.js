const palindrome = require("../jawaban-no-3");

const input = "reFeR";
const expectedOutput = true;

test("jika input string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false", () => {
  expect(palindrome(input)).toBe(expectedOutput)
});
