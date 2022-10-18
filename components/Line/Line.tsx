import { IWord } from "../../types/types";
import styles from "./Line.module.css";

interface Props {
  word?: IWord;
}

const Line = ({ word }: Props) => {
  if (word?.wordStr.length)
    return (
      <div className={styles.line}>
        {word.wordStr.split("").map((char, idx) => (
          <div key={idx} className={styles.char}>
            {char}
          </div>
        ))}
        {[...Array(5 - word.wordStr.length)].map((_, idx) => (
          <div key={idx} className={styles.char} />
        ))}
      </div>
    );

  return (
    <div className={styles.line}>
      <div className={styles.char}></div>
      <div className={styles.char}></div>
      <div className={styles.char}></div>
      <div className={styles.char}></div>
      <div className={styles.char}></div>
    </div>
  );
};

export default Line;
