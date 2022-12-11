import { Color, TKeyboard, wordArr } from "../types/types";

const setKeysColor = (wordsArr: wordArr[], _keyboard: TKeyboard) => {
  let keyboard = _keyboard;
  wordsArr.forEach((word) => {
    word?.forEach((char) => {
      const key = keyboard.find((key) => key.key === char.char);
      if (
        key.color === Color.green ||
        (key.color === Color.yellow && char.color !== Color.green)
      )
        return;

      keyboard = keyboard.map((key) =>
        key.key == char.char ? { ...key, color: char.color } : key
      );
    });
  });
  return keyboard;
};

export default setKeysColor;
