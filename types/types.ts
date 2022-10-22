enum Color {
  gray = "gray",
  yellow = "yellow",
  green = "green",
}

interface IChar {
  char: string;
  color: Color;
}

type wordArr = IChar[];

interface IWord {
  // wordArr: IChar[];
  wordArr: wordArr;
  wordStr: string;
}

export { Color };
export type { IChar, IWord, wordArr };
