import { useEffect, useState } from "react";
import formatWord from "../../helpers/formatWord";
import { IWord, wordArr } from "../../types/types";
import Line from "./Line/Line";
import styles from "./WyslownikGame.module.css";

interface Props {
  solution: string;
}

const WyslownikGame = ({ solution }: Props) => {
  const [words, setWords] = useState<IWord[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInput = (e: KeyboardEvent): void => {
    const key: string = e.key.toLowerCase();
    const isLetter: boolean = new RegExp(/^[a-z]$/).test(key);
    if (!isLetter && key !== "backspace" && key !== "enter") return;
    if (isLetter) setInput(input + key);
    else if (key === "backspace") setInput(input.slice(0, -1));
    else {
      const isDuplicate: boolean = words.find((word) => word.wordStr === input)
        ? true
        : false;

      if (isDuplicate) return;
      const wordArr: wordArr = formatWord(input, solution);
      const word: IWord = { wordStr: input, wordArr };
      console.log(word);
      setWords((prev) => [...prev, word]);
      setInput("");
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleInput);
    return () => document.removeEventListener("keyup", handleInput);
  }, [input, words]);

  return (
    <div className={styles.wyslownik}>
      {/* //solution: {solution} */}
      <div className={styles.words}>
        {words.map(
          (word, idx) =>
            idx > words.length - 6 && <Line key={idx} word={word} />
          // Show only last 5 entries
        )}
      </div>
      <div className={styles.input}>&nbsp;{input}</div>
    </div>
  );
};
export default WyslownikGame;
