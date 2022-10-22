import { useEffect, useRef } from "react";
import { IChar } from "../../types/types";
import styles from "./Char.module.css";

interface Props {
  char?: IChar;
  isWords?: boolean;
  isCurrent?: boolean;
  delay?: number | null;
}

const Char = ({ char, isWords, isCurrent, delay }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isWords) {
      ref.current.style.setProperty("--color", char.color);
      ref.current.style.setProperty("--delay", delay + "ms");
    }
  }, [char]);

  // console.log(char, isCurrent);

  return (
    <div
      ref={ref}
      className={`${styles.char} ${isCurrent ? styles.active : ""} ${
        isWords ? styles.uncover : ""
      }`}
    >
      {char?.char}
    </div>
  );
};

export default Char;
