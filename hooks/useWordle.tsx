import { useContext, useEffect } from "react";
import { gameStateEnum } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { IResponseWord } from "../types/types";
import WordleContext from "../context/WordleContext";

const useWordle = () => {
  const {
    setTurn,
    setSolution,
    setWords,
    setGameOverModalOpen,
    setFinishModalOpen,
    gameState,
    setGameState,
  } = useContext(WordleContext);

  const { error, isLoading, refetch } = useQuery<IResponseWord>(
    ["random"],
    () =>
      axios
        .get("https://wordle-db.onrender.com/random")
        .then((res: AxiosResponse) => res.data),
    {
      enabled: false,
    }
  );

  const restartGame = async (): Promise<void> => {
    const result = await refetch();
    if (!result.data) return;
    setSolution(result.data.word);
    setWords([...Array(5)]);
    setTurn(0);
    setFinishModalOpen(false);
    setGameOverModalOpen(false);
    setGameState(gameStateEnum.inProgress);
  };

  useEffect(() => {
    if (gameState === gameStateEnum.start) {
      restartGame();
    }
    if (gameState === gameStateEnum.finishWin) {
      setFinishModalOpen(true);
    }
    if (gameState === gameStateEnum.finishLose) {
      setGameOverModalOpen(true);
    }
  }, [gameState]);

  return {
    error,
    isLoading,
  };
};
export default useWordle;
