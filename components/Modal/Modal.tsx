import { ReactNode, useEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  open: boolean;
  setOpen: Function;
  children: ReactNode;
}

const Modal = ({ open, setOpen, children }: Props) => {
  // const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   console.log(open);
  // }, [open]);

  // useEffect(() => {
  //   ref &&
  //     ref.current &&
  //     ref.current.addEventListener("click", () => setOpen(false));

  //   return () => ref.current.addEventListener("click", () => setOpen(false));
  // }, []);

  return (
    <div
      className={`${styles["modal-window"]} ${open ? styles.open : ""}`}
      onClick={() => setOpen(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          onClick={() => setOpen(false)}
          className={styles["close-btn"]}
          src="/xmark-solid.svg"
          alt="exit"
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;
