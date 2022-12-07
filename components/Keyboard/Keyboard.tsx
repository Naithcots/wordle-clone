import { useEffect, useState } from "react";
import { Color, IWord, TKeyboard } from "../../types/types";
import Key from "./Key/Key";
import keys from "../../helpers/keyboardKeys";
import styles from "./Keyboard.module.css";

const _keyboard: TKeyboard = keys.map((key, id) => ({ key, color: null, id }));

interface Props {
  words: IWord[];
}

const Keyboard = ({ words }: Props) => {
  const [keyboard, setKeyboard] = useState<TKeyboard>(_keyboard);

  const rowOne = keyboard.slice(0, 10);
  const rowTwo = keyboard.slice(10, 19);
  const rowThree = keyboard.slice(19);

  useEffect(() => {
    setTimeout(() => {
      const wordsArr = words.map((word) => word?.wordArr);
      wordsArr.forEach((word) => {
        word?.forEach((char) => {
          const key = keyboard.find((key) => key.key === char.char);
          if (key.color !== (Color.green && Color.yellow)) {
            setKeyboard((prev) =>
              prev.map((key) =>
                key.key == char.char ? { ...key, color: char.color } : key
              )
            );
          }
        });
      });
    }, 1250);
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
