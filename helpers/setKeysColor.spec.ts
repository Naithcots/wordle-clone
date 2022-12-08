import { Color, TKeyboard, wordArr } from "../types/types";
import setKeysColor from "./setKeysColor";

const keyboard: TKeyboard = ["a", "b", "c", "d", "e"].map((key, id) => ({
  key,
  color: null,
  id,
}));

const wordsArrOne: wordArr[] = [
  [
    { char: "a", color: Color.green },
    { char: "b", color: Color.gray },
    { char: "a", color: Color.gray },
    { char: "d", color: Color.gray },
    { char: "e", color: Color.gray },
  ],
];

const expKeyboardOne: TKeyboard = [
  {
    key: "a",
    color: Color.green,
    id: 0,
  },
  {
    key: "b",
    color: Color.gray,
    id: 1,
  },
  {
    key: "c",
    color: null,
    id: 2,
  },
  {
    key: "d",
    color: Color.gray,
    id: 3,
  },
  {
    key: "e",
    color: Color.gray,
    id: 4,
  },
];

const wordsArrTwo: wordArr[] = [
  [
    { char: "a", color: Color.yellow },
    { char: "b", color: Color.gray },
    { char: "a", color: Color.green },
    { char: "d", color: Color.gray },
    { char: "e", color: Color.gray },
  ],
];

const expKeyboardTwo: TKeyboard = [
  {
    key: "a",
    color: Color.green,
    id: 0,
  },
  {
    key: "b",
    color: Color.gray,
    id: 1,
  },
  {
    key: "c",
    color: null,
    id: 2,
  },
  {
    key: "d",
    color: Color.gray,
    id: 3,
  },
  {
    key: "e",
    color: Color.gray,
    id: 4,
  },
];

const wordsArrThree: wordArr[] = [
  [
    { char: "a", color: Color.yellow },
    { char: "b", color: Color.gray },
    { char: "a", color: Color.gray },
    { char: "d", color: Color.gray },
    { char: "e", color: Color.gray },
  ],
];

const expKeyboardThree: TKeyboard = [
  {
    key: "a",
    color: Color.yellow,
    id: 0,
  },
  {
    key: "b",
    color: Color.gray,
    id: 1,
  },
  {
    key: "c",
    color: null,
    id: 2,
  },
  {
    key: "d",
    color: Color.gray,
    id: 3,
  },
  {
    key: "e",
    color: Color.gray,
    id: 4,
  },
];

const wordsArrFour: wordArr[] = [
  [
    { char: "a", color: Color.green },
    { char: "b", color: Color.gray },
    { char: "a", color: Color.yellow },
    { char: "d", color: Color.gray },
    { char: "e", color: Color.gray },
  ],
];

const expKeyboardFour: TKeyboard = [
  {
    key: "a",
    color: Color.green,
    id: 0,
  },
  {
    key: "b",
    color: Color.gray,
    id: 1,
  },
  {
    key: "c",
    color: null,
    id: 2,
  },
  {
    key: "d",
    color: Color.gray,
    id: 3,
  },
  {
    key: "e",
    color: Color.gray,
    id: 4,
  },
];

describe("Keyboard Keys", () => {
  test("set colors correctly", () => {
    expect(setKeysColor(wordsArrOne, keyboard)).toEqual<TKeyboard>(
      expKeyboardOne
    );
  });
  test("set colors correctly 2", () => {
    expect(setKeysColor(wordsArrTwo, keyboard)).toEqual<TKeyboard>(
      expKeyboardTwo
    );
  });
  test("set colors correctly 3", () => {
    expect(setKeysColor(wordsArrThree, keyboard)).toEqual<TKeyboard>(
      expKeyboardThree
    );
  });
  test("set colors correctly 4", () => {
    expect(setKeysColor(wordsArrFour, keyboard)).toEqual<TKeyboard>(
      expKeyboardFour
    );
  });
});
