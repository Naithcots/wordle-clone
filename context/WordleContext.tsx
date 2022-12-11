import { createContext, Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import checkWord from "../helpers/checkWord";
import formatWord from "../helpers/formatWord";
import { gameStateEnum, IWord, wordArr } from "../types/types";

interface Props {
  children: React.ReactNode;
}

interface IWordleContext {
  gameState: gameStateEnum;
  setGameState: Dispatch<SetStateAction<gameStateEnum>>;
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  solution: string | null;
  setSolution: Dispatch<SetStateAction<string>>;
  word: IWord;
  setWord: Dispatch<SetStateAction<IWord>>;
  words: IWord[];
  setWords: Dispatch<SetStateAction<IWord[]>>;
  gameOverModalOpen: boolean;
  setGameOverModalOpen: Dispatch<SetStateAction<boolean>>;
  finishModalOpen: boolean;
  setFinishModalOpen: Dispatch<SetStateAction<boolean>>;
  handleKeyUp: (e: KeyboardEvent | string) => Promise<void>;
}

const WordleContext = createContext<IWordleContext | null>(null);

export const WordleProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState<gameStateEnum>(
    gameStateEnum.start
  );
  const [turn, setTurn] = useState<number>(0);
  const [solution, setSolution] = useState<string | null>(null);
  const [word, setWord] = useState<IWord>({ wordStr: "", wordArr: [] });
  const [words, setWords] = useState<IWord[]>([...Array(5)]);
  const [gameOverModalOpen, setGameOverModalOpen] = useState<boolean>(false);
  const [finishModalOpen, setFinishModalOpen] = useState<boolean>(false);
  const toastId = 1;

  const handleKeyUp = async (e: KeyboardEvent | string): Promise<void> => {
    const key: string = typeof e === "string" ? e : e.key.toLowerCase();
    const isSingleLetter: boolean = new RegExp(/^[a-z]$/).test(key);
    if (!isSingleLetter && key !== "backspace" && key !== "enter") return;

    if (isSingleLetter) {
      if (word.wordStr.length < 5) {
        const wordStr: string = word.wordStr + key;
        const wordArr: wordArr = formatWord(wordStr, solution);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "backspace") {
      if (word.wordStr.length) {
        const wordStr: string = word.wordStr.slice(0, -1);
        const wordArr: wordArr = formatWord(wordStr, solution);
        setWord({ wordStr, wordArr });
      }
    } else if (key === "enter") {
      if (word.wordStr.length === 5) {
        if (word.wordStr === solution) {
          addWord(word.wordStr, turn);
          setWord({ wordStr: "", wordArr: [] });
          setTurn((prev) => prev + 1);
          setGameState(gameStateEnum.finishWin);
          return;
        }

        const res = await checkWord(word.wordStr);
        if (!res) {
          toast.error("We couldn't verify this word.", {
            toastId: toastId,
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          return;
        }
        const exists = res.exists;
        if (!exists) {
          toast.error("Word do not exist in dictionary!", {
            toastId: toastId,
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          return;
        }

        // If last turn and word is not a solution - game over
        if (turn === 4) {
          setGameState(gameStateEnum.finishLose);
        }

        // Check if current word is already guessed
        const isDuplicate: boolean = words.find(
          (_word) => _word?.wordStr === word.wordStr
        )
          ? true
          : false;
        if (isDuplicate) {
          return;
        }

        addWord(word.wordStr, turn);
        setWord({ wordStr: "", wordArr: [] });
        setTurn((prev) => prev + 1);
      }
    }
  };

  const addWord = (word: string, idx: number) => {
    // Set word at correct index in words array
    setWords((prev) => {
      return prev.map((e: IWord, i: number) =>
        i === idx ? { wordStr: word, wordArr: formatWord(word, solution) } : e
      );
    });
  };

  const value: IWordleContext = {
    turn,
    setTurn,
    solution,
    setSolution,
    word,
    setWord,
    words,
    setWords,
    gameOverModalOpen,
    setGameOverModalOpen,
    finishModalOpen,
    setFinishModalOpen,
    gameState,
    setGameState,
    handleKeyUp,
  };

  return (
    <WordleContext.Provider value={value}>{children}</WordleContext.Provider>
  );
};

export default WordleContext;
