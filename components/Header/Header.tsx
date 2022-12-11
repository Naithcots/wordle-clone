import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Header.module.css";

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>yetAnotherWordle</h2>
      <img
        className={styles.theme}
        src="/moon-solid.svg"
        alt="Switch theme"
        onClick={switchTheme}
      />
    </header>
  );
};

export default Header;
