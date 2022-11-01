import { useEffect, useRef } from "react";
import { Ikey } from "../../../types/types";
import styles from "./Key.module.css";

interface Props {
  _key: Ikey;
}

const Key = ({ _key }: Props) => {
  const ref = useRef<null | HTMLButtonElement>(null);
  useEffect(() => {
    _key.color &&
      ref &&
      ref.current &&
      ref.current.style.setProperty("--color", _key.color);
  }, [_key]);

  return (
    <button ref={ref} className={styles.key}>
      {_key.key}
    </button>
  );
};
export default Key;
