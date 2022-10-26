import { IWord } from "../../../types/types";
import Char from "../Char/Char";
import styles from "./Line.module.css";

interface Props {
  word?: IWord;
  isWords?: boolean;
  isCurrent?: boolean;
}

const Line = ({ word, isWords, isCurrent }: Props) => {
  if (word)
    return (
      <div className={styles.line}>
        {word.wordArr.map((char, idx) => (
          <Char
            key={idx}
            char={char}
            isWords={isWords}
            isCurrent={isCurrent}
            delay={isWords ? idx * 200 : null}
          />
        ))}
        {[...Array(5 - word.wordStr.length)].map((_, idx) => (
          <Char key={idx} />
        ))}
      </div>
    );

  return (
    <div className={styles.line}>
      {[...Array(5)].map((_, idx) => (
        <Char key={idx} />
      ))}
    </div>
  );
};

export default Line;
