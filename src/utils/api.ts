import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import type { TRegisterData } from "./types";
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
