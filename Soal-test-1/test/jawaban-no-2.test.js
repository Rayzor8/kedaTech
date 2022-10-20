const sortArr = require("../jawaban-no-2");
const { sortLargeToSmall, sortSmallToLarge } = sortArr;

const input = [1, 10, 3];

describe("sort Array Input", () => {
  test("mengurutkan input array integer, dari kecil ke besar", () => {
    expect(sortSmallToLarge(input)).toStrictEqual([1, 3, 10]);
  });

  test("mengurutkan input array integer, dari besar ke kecil", () => {
    expect(sortLargeToSmall(input)).toStrictEqual([10, 3, 1]);
  });
});
