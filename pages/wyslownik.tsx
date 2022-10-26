import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import getRandom from "../helpers/getRandom";
import WyslownikGame from "../components/WyslownikGame/WyslownikGame";

const Wyslownik: NextPage = () => {
  const [solution, setSolution] = useState<string | null>(null);
  const { error, isLoading, data } = useQuery(["wyslownikWords"], () =>
    axios
      .get("http://localhost:1338/words")
      .then((res: AxiosResponse) => res.data)
  );

  useEffect(() => {
    if (data) {
      const randomWord = getRandom(data);
      setSolution(randomWord);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Wysłownik</title>
      </Head>
      <WyslownikGame solution={solution} />
    </>
  );
};

export default Wyslownik;
