import { Color, wordArr } from "../types/types";
import formatWord from "./formatWord";

const testOneWord: wordArr = [
  { char: "h", color: Color.gray },
  { char: "e", color: Color.gray },
  { char: "l", color: Color.gray },
  { char: "l", color: Color.green },
  { char: "o", color: Color.yellow },
];

const testTwoWord: wordArr = [
  { char: "p", color: Color.gray },
  { char: "i", color: Color.gray },
  { char: "z", color: Color.yellow },
  { char: "z", color: Color.gray },
  { char: "a", color: Color.gray },
];

const testThreeWord: wordArr = [
  { char: "s", color: Color.green },
  { char: "h", color: Color.green },
  { char: "o", color: Color.green },
  { char: "u", color: Color.green },
  { char: "t", color: Color.green },
];

const testFourWord: wordArr = [
  { char: "e", color: Color.green },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "e", color: Color.green },
];

const testFiveWord: wordArr = [
  { char: "e", color: Color.gray },
  { char: "e", color: Color.gray },
  { char: "e", color: Color.gray },
  { char: "e", color: Color.gray },
  { char: "e", color: Color.green },
];

const testSixWord: wordArr = [
  { char: "a", color: Color.green },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
];

const testSevenWord: wordArr = [
  { char: "r", color: Color.gray },
  { char: "r", color: Color.gray },
  { char: "r", color: Color.green },
  { char: "r", color: Color.gray },
  { char: "r", color: Color.gray },
];

const testEightWord: wordArr = [
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
  { char: "a", color: Color.gray },
];

describe("Format word correctly", () => {
  test("should gray first 'l' if found green already", () => {
    expect(formatWord("hello", "world")).toEqual(testOneWord);
  });
  test("should gray second 'z' if only one included in solution", () => {
    expect(formatWord("pizza", "zorro")).toEqual(testTwoWord);
  });
  test("should green entire word if equals solution", () => {
    expect(formatWord("shout", "shout")).toEqual(testThreeWord);
  });
  test("should green entire word if char duplicated in solution", () => {
    expect(formatWord("eaaae", "eerie")).toEqual(testFourWord);
  });
  test("test 5", () => {
    expect(formatWord("eeeee", "agile")).toEqual(testFiveWord);
  });
  test("test 6", () => {
    expect(formatWord("aaaaa", "agile")).toEqual(testSixWord);
  });
  test("test 7", () => {
    expect(formatWord("rrrrr", "world")).toEqual(testSevenWord);
  });
  test("should gray the entire word", () => {
    expect(formatWord("aaaaa", "world")).toEqual(testEightWord);
  });
});
