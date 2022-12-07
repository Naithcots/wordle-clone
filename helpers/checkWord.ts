import axios from "axios";

interface IResponse {
  exists: boolean;
}

const checkWord = async (word: string): Promise<IResponse | undefined> => {
  const res = await axios.get(`http://localhost:5400/check?word=${word}`);
  const data = await res.data;
  return data;
};

export default checkWord;
