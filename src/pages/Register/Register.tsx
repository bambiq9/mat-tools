import { RegisterUI } from "@components/ui/pages/RegisterUI/RegisterUI";
import { useState, type FC } from "react";

export const Register: FC = () => {
  const [email, setEtmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};

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
