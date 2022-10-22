import { useEffect, useState } from "react";
import { Color, IWord, wordArr } from "../../types/types";
import Line from "../Line/Line";
import styles from "./Wordle.module.css";

interface Props {
  solution: string;
}

const Wordle = ({ solution }: Props) => {
  const [turn, setTurn] = useState<number>(0);
  const [word, setWord] = useState<IWord>({ wordStr: "", wordArr: [] });
  const [words, setWords] = useState<IWord[]>([...Array(5)]);
  const [solutionFound, setSolutionFound] = useState<boolean>(false);

  const addWord = (word: string, idx: number) => {
    // const wordsCopy = words;
    // const wordArr: IChar[] = formatWord(word);
    // const newWord: IWord = { wordArr, wordStr: word };
    // wordsCopy[idx] = newWord;
    // setWords(wordsCopy);

    setWords((prev) => {
      return prev.map((e: IWord, i: number) =>
        i === idx ? { wordStr: word, wordArr: formatWord(word) } : e
      );
    });
  };

  const formatWord = (word: string): wordArr => {
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

  const handleKeyUp = (e: KeyboardEvent): void => {
    const key: string = e.key.toLowerCase();
    const isSingleLetter: boolean = new RegExp(/^[a-z]$/).test(key);
    if (!isSingleLetter && key !== "backspace" && key !== "enter") return;

    if (isSingleLetter) {
      if (word.wordStr.length < 5) {
        const wordStr: string = word.wordStr + key;
        const wordArr: wordArr = formatWord(wordStr);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "backspace") {
      if (word.wordStr.length) {
        const wordStr: string = word.wordStr.slice(0, -1);
        const wordArr: wordArr = formatWord(wordStr);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "enter") {
      if (word.wordStr.length === 5) {
        // console.log("Word check:", word);

        if (word.wordStr === solution) {
          setSolutionFound(true);
          addWord(word.wordStr, turn);
          setWord({ wordStr: "", wordArr: [] });
          setTurn((prev) => prev + 1);
          return;
        }

        const isDuplicate: boolean = words.find(
          (_word) => _word?.wordStr === word.wordStr
        )
          ? true
          : false;
        if (isDuplicate) {
          console.log("Duplicated word:", word);
          return;
        }

        addWord(word.wordStr, turn);
        setWord({ wordStr: "", wordArr: [] });
        setTurn((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    !solutionFound && document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [word, words]);

  return (
    <div className={styles.wordle}>
      {words.map((e, idx) =>
        idx === turn ? (
          <Line isCurrent key={idx} word={word} />
        ) : (
          <Line isWords key={idx} word={e} />
        )
      )}
    </div>
  );
};

export default Wordle;
