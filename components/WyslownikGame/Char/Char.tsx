import { IChar } from "../../../types/types";
import styles from "./Char.module.css";

interface Props {
  char: IChar;
}

const Char = ({ char }: Props) => {
  return (
    <div className={styles.char} style={{ color: char.color }}>
      {char.char}
    </div>
  );
};
export default Char;
