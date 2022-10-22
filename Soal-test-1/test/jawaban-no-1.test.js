const fishBash = require("../jawaban-no-1");

describe("fish bash", () => {
  test("should return a valid string", () => {
    expect(fishBash(15)).toMatchInlineSnapshot();
    expect(fishBash(5)).toMatchInlineSnapshot();
    expect(fishBash(3)).toMatchInlineSnapshot();
  });

  test("should return undefined", () => {
    expect(fishBash(1)).toMatchInlineSnapshot();
    expect(fishBash(0)).toMatchInlineSnapshot();
    expect(fishBash(11)).toMatchInlineSnapshot();
  });
});
