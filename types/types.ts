enum Color {
  gray = "gray",
  yellow = "#fbbf24",
  green = "green",
}

interface IChar {
  char: string;
  color: Color;
}

type wordArr = IChar[];

interface IWord {
  wordArr: wordArr;
  wordStr: string;
}

export { Color };
export type { IChar, IWord, wordArr };
