const palindrome = require("../jawaban-no-3");

describe("jika input string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false", () => {
  
  test("string dibalik, tetap sama return true", () => {
    expect(palindrome("reFeR")).toBe(true);
    expect(palindrome("noon")).toBe(true);
    expect(palindrome("madam")).toBe(true);
  });

  test("string dibalik, tidak sama return false", () => {
    expect(palindrome("ray")).toBe(false);
    expect(palindrome("hidden")).toBe(false);
    expect(palindrome("empty")).toBe(false);
  });
});
