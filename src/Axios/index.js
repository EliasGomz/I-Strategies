import axios from "axios";

export const instance = axios.create({
  baseURL: "https://i-strategies-e3d87-default-rtdb.firebaseio.com/",
});
