enum Color {
  gray = "gray",
  yellow = "yellow",
  green = "green",
}

interface IChar {
  char: string;
  color?: Color;
}

interface IWord {
  wordArr?: IChar[];
  wordStr: string;
  // hidden: boolean;
}

export { Color };
export type { IChar, IWord };
