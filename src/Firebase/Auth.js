import { signOut } from "firebase/auth";
import { dataBase } from "./FirebaseConfig";

export const signOutUser = () => {
  signOut(dataBase);
};
