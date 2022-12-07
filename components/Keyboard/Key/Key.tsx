import { useContext, useEffect, useRef } from "react";
import WordleContext from "../../../context/WordleContext";
import { Ikey } from "../../../types/types";
import styles from "./Key.module.css";

interface Props {
  _key: Ikey;
}

const Key = ({ _key }: Props) => {
  const ref = useRef<null | HTMLButtonElement>(null);
  const { handleKeyUp } = useContext(WordleContext);
  useEffect(() => {
    _key.color &&
      ref &&
      ref.current &&
      ref.current.style.setProperty("--color", _key.color);
  }, [_key]);

  return (
    <button
      ref={ref}
      className={styles.key}
      onClick={() => handleKeyUp(_key.key)}
    >
      {_key.key}
    </button>
  );
};
export default Key;
