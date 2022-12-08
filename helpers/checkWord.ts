import axios from "axios";

interface IResponse {
  exists: boolean;
}

const checkWord = async (word: string): Promise<IResponse | undefined> => {
  try {
    const res = await axios.get(`https://wordle-db.onrender.com/check?word=${word}`);
    const data = await res.data;
    return data;
  } catch (err) {
    return undefined;
  }
};

export default checkWord;
