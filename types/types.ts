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

enum gameStateEnum {
  start = 1,
  inProgress = 2,
  finishWin = 3,
  finishLose = 4,
}

export { Color, gameStateEnum };
export type { IChar, IWord, wordArr };
