import type { Dispatch, SetStateAction } from "react";

export type RegisterUIProps = {
  handleSubmit: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};
