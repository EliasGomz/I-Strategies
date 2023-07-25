import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEysFedziC9ypmkOWxDXiwsIPxZ74-zXc",
  authDomain: "i-strategies-e3d87.firebaseapp.com",
  projectId: "i-strategies-e3d87",
  storageBucket: "i-strategies-e3d87.appspot.com",
  messagingSenderId: "977786403505",
  appId: "1:977786403505:web:2034d6fca397afb149c090",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getAuth(app);
