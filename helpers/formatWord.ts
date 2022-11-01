import { Color, wordArr } from "../types/types";

const formatWord = (_word: string, solution: string): wordArr => {
  const word = _word.split("").map((char, idx) => {
    const { gray, yellow, green } = Color;
    let color: Color = gray;
    const existInSolution: boolean = solution.includes(char);
    const positionCorrect: boolean = solution[idx] === char;

    if (positionCorrect) color = green;
    else if (existInSolution) color = yellow;

    return { char, color };
  });

  const normalizedWord = word.map((char, idx) => {
    const letterDupInSolution: boolean =
      solution.split("").filter((c) => c === char.char).length > 1
        ? true
        : false;

    // If char is not duplicated in the solution
    if (!letterDupInSolution) {
      // If char is dup in word it should be gray when:
      // a) Same char is green on another index
      // b) Same char is yellow on first appearance
      const duplicates = word.filter(
        (_word, _idx) => _word.char === char.char && _idx !== idx
      );
      // console.log(duplicates);

      // a)
      if (duplicates.find((dup) => dup.color === Color.green))
        return { ...char, color: Color.gray };

      // b)
      if (char.color === Color.green) return char;

      const isDuplicate: boolean = word.find(
        (_char, _idx) =>
          _char.char === char.char && _char.color === Color.yellow && _idx < idx
      )
        ? true
        : false;

      if (isDuplicate) {
        return { ...char, color: Color.gray };
      }
    }
    return char;
  });

  return normalizedWord;
};

export default formatWord;
