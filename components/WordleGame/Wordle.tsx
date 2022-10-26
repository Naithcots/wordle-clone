import { Dispatch, SetStateAction, useEffect, useState } from "react";
import formatWord from "../../helpers/formatWord";
import { gameStateEnum, IWord, wordArr } from "../../types/types";
import Line from "./Line/Line";
import styles from "./Wordle.module.css";

interface Props {
  solution: string;
  gameState: gameStateEnum;
  setGameState: Dispatch<SetStateAction<gameStateEnum>>;
}

const WordleGame = ({ solution, gameState, setGameState }: Props) => {
  const [turn, setTurn] = useState<number>(0);
  const [word, setWord] = useState<IWord>({ wordStr: "", wordArr: [] });
  const [words, setWords] = useState<IWord[]>([...Array(5)]);

  const addWord = (word: string, idx: number) => {
    // Set word at correct index in words array
    setWords((prev) => {
      return prev.map((e: IWord, i: number) =>
        i === idx ? { wordStr: word, wordArr: formatWord(word, solution) } : e
      );
    });
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    const key: string = e.key.toLowerCase();
    const isSingleLetter: boolean = new RegExp(/^[a-z]$/).test(key);
    if (!isSingleLetter && key !== "backspace" && key !== "enter") return;

    if (isSingleLetter) {
      if (word.wordStr.length < 5) {
        const wordStr: string = word.wordStr + key;
        const wordArr: wordArr = formatWord(wordStr, solution);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "backspace") {
      if (word.wordStr.length) {
        const wordStr: string = word.wordStr.slice(0, -1);
        const wordArr: wordArr = formatWord(wordStr, solution);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "enter") {
      if (word.wordStr.length === 5) {
        if (word.wordStr === solution) {
          addWord(word.wordStr, turn);
          setWord({ wordStr: "", wordArr: [] });
          setTurn((prev) => prev + 1);
          setGameState(gameStateEnum.finishWin);
          return;
        }

        // If last turn and word is not a solution - game over
        if (turn === 4) {
          setGameState(gameStateEnum.finishLose);
        }

        // Check if current word is already guessed
        const isDuplicate: boolean = words.find(
          (_word) => _word?.wordStr === word.wordStr
        )
          ? true
          : false;
        if (isDuplicate) {
          return;
        }

        addWord(word.wordStr, turn);
        setWord({ wordStr: "", wordArr: [] });
        setTurn((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    gameState === gameStateEnum.inProgress &&
      document.addEventListener("keyup", handleKeyUp);
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

export default WordleGame;
