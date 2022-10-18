enum Color {
  gray = "gray",
  yellow = "yellow",
  green = "green",
}

interface IChar {
  char: string;
  color: Color;
}

interface IWord {
  word: IChar[];
  // hidden: boolean;
}

export { Color };
export type { IChar, IWord };
