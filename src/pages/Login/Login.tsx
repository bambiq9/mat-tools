import { LoginUI } from "@components/ui/pages/LoginUI/LoginUI";
import { useDispatch } from "@services/store";
import { loginUser } from "@services/userSlice";
import type { TUserCredData } from "@utils/types";
import { useState, type FC, type SyntheticEvent } from "react";

export const Login: FC = () => {
  const dispatch = useDispatch();

  const [email, setEtmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const userData: TUserCredData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEtmail}
      password={password}
      setPassword={setPassword}
    />
  );
};
