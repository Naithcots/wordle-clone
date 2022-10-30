import { useEffect, useState } from "react";
import { IWord, key, TKeyboard } from "../../types/types";
import Key from "./Key/Key";
import styles from "./Keyboard.module.css";

const keys: key[] = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "enter",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "backspace",
];

const _keyboard: TKeyboard = keys.map((key, id) => ({ key, color: null, id }));

interface Props {
  words: IWord[];
}

const Keyboard = ({ words }: Props) => {
  const [keyboard, setKeyboard] = useState<TKeyboard>(_keyboard);
  console.log(keyboard);

  const rowOne = keyboard.slice(0, 10);
  const rowTwo = keyboard.slice(10, 19);
  const rowThree = keyboard.slice(19);

  useEffect(() => {
    const wordsArr = words.map((word) => word?.wordArr);
    wordsArr.forEach((word) => {
      word?.forEach((char) => {
        const isDuplicate = keyboard.find((key) => key.key === char.char).color;
        !isDuplicate &&
          setKeyboard((prev) =>
            prev.map((key) => {
              return key.key == char.char ? { ...key, color: char.color } : key;
            })
          );
      });
    });
  }, [words]);

  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        {rowOne.map((key) => (
          <Key key={key.id} _key={key} />
        ))}
      </div>
      <div className={styles.row}>
        {rowTwo.map((key) => (
          <Key key={key.id} _key={key} />
        ))}
      </div>
      <div className={styles.row}>
        {rowThree.map((key) => (
          <Key key={key.id} _key={key} />
        ))}
      </div>
    </div>
  );
};
export default Keyboard;
