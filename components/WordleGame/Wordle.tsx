import { useContext, useEffect } from "react";
import WordleContext from "../../context/WordleContext";
import { gameStateEnum } from "../../types/types";
import Line from "./Line/Line";
import styles from "./Wordle.module.css";

const WordleGame = () => {
  const { word, words, turn, gameState, handleKeyUp } =
    useContext(WordleContext);

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
