import type { FC } from "react";
import type { RegisterUIProps } from "./type";
import { Button, Input } from "@mui/material";

export const RegisterUI: FC<RegisterUIProps> = ({
  handleSubmit,
  setEmail,
  setPassword,
}) => (
  <main>
    <h2>Регстрация</h2>
    <form name="register" onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="password"
      />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  </main>
);
