const customSort = require("../jawaban-no-2");

describe("sort Array Input", () => {

  test("mengurutkan input array integer, dari kecil ke besar", () => {
    expect(customSort([1, 10, 3], "smallToLarge")).toMatchInlineSnapshot();
    expect(customSort([100, 1, 6, 4], "smallToLarge")).toMatchInlineSnapshot();
  });

  test("mengurutkan input array integer, dari besar ke kecil", () => {
    expect(customSort([1, 3, 10], "largeToSmall")).toMatchInlineSnapshot();
    expect(customSort([10, 3, 10, 5], "largeToSmall")).toMatchInlineSnapshot();
  });
  
});
