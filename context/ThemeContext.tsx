import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

enum Themes {
  light = "light",
  dark = "dark",
}

interface IContext {
  theme: Themes;
  // setTheme: Function;
  switchTheme: () => void;
}

const ThemeContext = createContext<IContext | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Themes | null>(null);

  const switchTheme = (): void => {
    theme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light);
  };

  useEffect(() => {
    if (theme === Themes.dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === Themes.light) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      theme === "light" ? setTheme(Themes.light) : setTheme(Themes.dark);
      return;
    }

    const prefferedSchemeLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    prefferedSchemeLight ? setTheme(Themes.light) : setTheme(Themes.dark);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider, Themes };
