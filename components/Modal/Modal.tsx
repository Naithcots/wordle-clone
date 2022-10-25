import { ReactNode, useEffect, useState } from "react";
import styles from "./Modal.module.css";

interface Props {
  setOpen: Function;
  children: ReactNode;
  delay?: number;
}

const Modal = ({ setOpen, children, delay }: Props) => {
  const [show, setShow] = useState<Boolean>(false);

  // Postpone modal popup if delay variable provided
  useEffect(() => {
    let delayTimeout: NodeJS.Timeout;
    if (delay) {
      delayTimeout = setTimeout(() => {
        setShow(true);
      }, delay);
    } else setShow(true);

    return () => clearTimeout(delayTimeout);
  }, [open]);

  return (
    <div
      className={`${styles["modal-window"]} ${show ? styles.show : ""}`}
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
