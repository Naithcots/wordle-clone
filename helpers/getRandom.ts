import { IResponseWord } from "../types/types";

const getRandom = (arr: IResponseWord[]) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx].word;
};

export default getRandom;
