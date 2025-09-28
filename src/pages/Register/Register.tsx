import { RegisterUI } from "@components/ui/pages/RegisterUI/RegisterUI";
import { useDispatch } from "@services/store";
import { registerUser } from "@services/userSlice";
import type { TRegisterData, UserRole } from "@utils/types";
import { useState, type FC, type SyntheticEvent } from "react";

export const Register: FC = () => {
  const dispatch = useDispatch();

  const [email, setEtmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole[]>(["guest"]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const userData: TRegisterData = {
      name: "mock",
      email,
      password,
      role,
    };
    dispatch(registerUser(userData));
  };

  return (
    <RegisterUI
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEtmail}
      password={password}
      setPassword={setPassword}
    />
  );
};
