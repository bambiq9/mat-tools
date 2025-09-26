import type { Dispatch, SetStateAction, SyntheticEvent } from "react";

export type LoginUIProps = {
  handleSubmit: (e: SyntheticEvent) => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};
