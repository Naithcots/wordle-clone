import Head from "next/head";
import { NextPage } from "next";
import { useContext } from "react";
import { gameStateEnum } from "../types/types";
import { ToastContainer } from "react-toastify";
import WordleGame from "../components/WordleGame/Wordle";
import Keyboard from "../components/Keyboard/Keyboard";
import Modal from "../components/Modal/Modal";
import WordleContext from "../context/WordleContext";
import useWordle from "../hooks/useWordle";
import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const { error, isLoading } = useWordle();
  const {
    gameState,
    setGameState,
    solution,
    gameOverModalOpen,
    finishModalOpen,
    setGameOverModalOpen,
    setFinishModalOpen,
  } = useContext(WordleContext);

  if (error)
    return (
      <div className={styles["info-container"]}>
        <div className={styles.info}>
          <h3 className={styles["error-text"]}>
            Oopsie! We couldn&apos;t get words for you.
          </h3>
          <p className={styles.text}>Please try again later</p>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className={styles["spinner-box"]}>
        <img src="/circle-notch-solid.svg" className={styles.spinner} />
        <p className={styles.text}>Loading</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {gameState != gameStateEnum.start && (
          <>
            <WordleGame />
            <Keyboard />
          </>
        )}
      </main>

      {finishModalOpen && (
        <Modal setOpen={setFinishModalOpen} delay={1500}>
          <h1>Congratulations!</h1>
          <p>You solved this puzzle.</p>
          <p>One more round?</p>
          <button onClick={() => setGameState(gameStateEnum.start)}>
            New game
          </button>
        </Modal>
      )}

      {gameOverModalOpen && (
        <Modal setOpen={setGameOverModalOpen} delay={1500}>
          <h1>Game Over!</h1>
          <p>Better luck next time.</p>
          <p>
            The solution is: <b>{solution}</b>
          </p>
          <p>One more round?</p>
          <button onClick={() => setGameState(gameStateEnum.start)}>
            New game
          </button>
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};

export default Home;
