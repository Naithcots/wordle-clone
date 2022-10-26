import { Color, wordArr } from "../types/types";

const formatWord = (word: string, solution: string): wordArr => {
  return word.split("").map((char, idx) => {
    const { gray, yellow, green } = Color;
    let color: Color = gray;
    const existInSolution: boolean = solution.includes(char);
    const positionCorrect: boolean = solution[idx] === char;

    if (positionCorrect) color = green;
    else if (existInSolution) color = yellow;

    return { char, color };
  });
};

export default formatWord;
