import styles from "./Line.module.css";

const Line = () => {
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
