import { useEffect, useState } from "react";
import { Color, IChar, IWord } from "../../types/types";
import Line from "../Line/Line";
import styles from "./Wordle.module.css";

interface Props {
  solution: string;
}

const Wordle = ({ solution }: Props) => {
  const [word, setWord] = useState<IWord>({ wordStr: "" });
  const [history, setHistory] = useState<IWord[]>([]);

  console.log(word);

  const handleKeyUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    const isSingleLetter = new RegExp(/^[a-z]$/).test(key);
    if (!isSingleLetter && key !== "backspace" && key !== "enter") return;

    if (isSingleLetter) {
      if (word.wordStr.length < 5) {
        setWord((prev) => ({ wordStr: prev.wordStr + key }));
      }
    }

    if (key === "backspace") {
      if (word.wordStr.length)
        setWord((prev) => ({ wordStr: prev.wordStr.slice(0, -1) }));
    }

    if (key === "enter") {
      if (word.wordStr.length === 5) {
        console.log("Word check:", word);

        if (word.wordStr === solution) {
          console.log("Solution guessed! Congratulations");
          return;
        }

        const isDuplicate: boolean = history.find(
          (_word) => _word.wordStr === word.wordStr
        )
          ? true
          : false;
        if (isDuplicate) {
          console.log("Duplicated word:", word);
          return;
        }

        const wordArr: IChar[] = word.wordStr.split("").map((char, idx) => {
          let color: Color = Color.gray;
          const isContainedInSolution: boolean = solution.includes(char);
          const isPositionCorrect: boolean = solution[idx] === char;

          if (isPositionCorrect) color = Color.green;
          else if (isContainedInSolution) color = Color.yellow;

          return { char, color };
        });

        const newHistoryEntry: IWord = {
          wordArr,
          wordStr: word.wordStr,
        };
        setHistory((prev) => [...prev, newHistoryEntry]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [word, history]);

  return (
    <div className={styles.wordle}>
      {history.map((word, idx) => (
        <Line word={word} key={idx} />
      ))}
      <Line word={word} />
      {[...Array(5 - history.length - 1)].map((_, idx) => (
        <Line key={idx} />
      ))}
    </div>
  );
};

export default Wordle;
