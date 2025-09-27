import type { FC } from "react";
import type { LoginUIProps } from "./type";
import { Button, Input } from "@mui/material";

export const LoginUI: FC<LoginUIProps> = ({
  handleSubmit,
  setEmail,
  setPassword,
}) => (
  <main>
    <h2>Вход</h2>
    <form name="login" onSubmit={handleSubmit}>
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
      <Button type="submit">Войти</Button>
    </form>
  </main>
);
