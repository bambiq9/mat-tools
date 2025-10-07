import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, getDoc, getDocs, collection } from "firebase/firestore";
import type {
  TAssemblyUnit,
  TAssemblyUnitPart,
  TRegisterData,
  TUser,
  TUserCredData,
} from "./types";
import { isAssemblyUnit, isAssemblyUnitPart } from "./helpers";

export const createNewUserApi = async (data: TUser) => {
  const { id, email, name, role } = data;

  const user = {
    id,
    email,
    name,
    role,
  };

  try {
    await setDoc(doc(db, "users", user.id), { user });
    console.log("done");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserEmailApi = async (data: TRegisterData) => {
  const { email, password, name, role } = data;
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const id = userData.user.uid;

    const user = {
      id,
      email,
      password,
      name,
      role,
    };

    createNewUserApi(user);

    return { id, email, name, role };
  } catch (regError) {
    return Promise.reject(regError);
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

export const getUserApi = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAssemblyUnitsListApi = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "assemblyUnits"));
    const units: TAssemblyUnit[] = [];
    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const date = data.date;
      const blueprintDate = (data.blueprint.date = doc.data().blueprint.date);

      const unit = {
        ...data,
        date,
        blueprint: {
          ...data.blueprint,
          date: blueprintDate,
        },
      };

      if (isAssemblyUnit(unit)) units.push(unit);
    });

    return units;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAssemblyUnitPartsListApi = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "assemblyUnitParts"));
    const parts: TAssemblyUnitPart[] = [];

    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();

      if (isAssemblyUnitPart(data)) parts.push(data);
    });

    return parts;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAssemblyUnitPartApi = async (partId: string) => {
  try {
    const docRef = doc(db, "assemblyUnitParts", partId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (!data) throw Error("No data");

    if (isAssemblyUnitPart(data)) return data;
    throw Error("No data");
  } catch (error) {
    return Promise.reject(error);
  }
};
