import { useEffect } from "react";
import { IWord } from "../../types/types";
import Line from "../Line/Line";
import styles from "./Wordle.module.css";

interface Props {
  solution: string;
  words: IWord[];
}

const Wordle = ({ solution, words }: Props) => {
  // useEffect(() => {
  // }, [words]);

  return (
    <div className={styles.wordle}>
      {words.map((word, idx) => (
        <Line key={idx} />
      ))}
      <Line />
      {[...Array(5 - words.length - 1)].map((_, idx) => (
        <Line key={idx} />
      ))}
    </div>
  );
};

export default Wordle;
