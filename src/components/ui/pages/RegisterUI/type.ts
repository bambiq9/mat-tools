import type { UserRole } from "@utils/types";
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";

export type RegisterUIProps = {
  handleSubmit: (e: SyntheticEvent) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  role: UserRole;
  setRole: Dispatch<React.SetStateAction<UserRole>>;
};
