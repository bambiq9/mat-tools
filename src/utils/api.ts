import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import type { TRegisterData, TUserCredData } from "./types";
import { auth } from "./firebase";

export const registerUserEmailApi = async (data: TRegisterData) => {
  const { name, email, password } = data;
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userData.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUserEmailApi = async (data: TUserCredData) => {
  const { email, password } = data;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const logoutUserApi = async () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
