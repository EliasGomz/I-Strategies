import { instance } from "../Axios";
import { PathMovies } from "../Const";

const generateRandomId = () => {
  const randomId = Math.floor(10000 + Math.random() * 90000);
  return randomId.toString();
};

const isIdDuplicate = async (id) => {
  try {
    const response = await instance.get(`${PathMovies}/${id}`);
    return !!response.data;
  } catch (error) {
    return false;
  }
};

export const generateUniqueRandomId = async () => {
  let randomId;
  let isDuplicate;

  do {
    randomId = generateRandomId();
    isDuplicate = await isIdDuplicate(randomId);
  } while (isDuplicate);

  return randomId;
};
