import { IWord } from "../../../types/types";
import Char from "../Char/Char";
import styles from "./Line.module.css";

interface Props {
  word: IWord;
}

const Line = ({ word }: Props) => {
  return (
    <div className={styles.line}>
      {word.wordArr.map((char, idx) => (
        <Char key={idx} char={char} />
      ))}
    </div>
  );
};
export default Line;
