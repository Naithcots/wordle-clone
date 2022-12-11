enum Color {
  gray = "gray",
  yellow = "#fbbf24",
  green = "green",
}

interface IResponseWord {
  id: number;
  word: string;
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

type key = string;

interface Ikey {
  key: string;
  color: null | Color;
  id: number;
}

type TKeyboard = Ikey[];

export { Color, gameStateEnum };
export type { IResponseWord, IChar, IWord, wordArr, key, Ikey, TKeyboard };
