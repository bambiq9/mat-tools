import type { FC } from "react";
import type { RegisterUIProps } from "./type";
import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import type { UserRole } from "@utils/types";

export const RegisterUI: FC<RegisterUIProps> = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
}) => (
  <main>
    <h2>Регстрация</h2>
    <form name="register" onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="name"
        value={name}
      />
      <InputLabel id="role-label">Должность</InputLabel>
      <Select<UserRole>
        labelId="role-label"
        id="role"
        value={role}
        label="Должность"
        onChange={(e) => setRole(e.target.value)}
      >
        <MenuItem value={"assembly"}>Слесарь МСР</MenuItem>
        <MenuItem value={"electric"}>Электромонтажник</MenuItem>
        <MenuItem value={"refrigeration"}>
          Монтажник холодильного оборудования
        </MenuItem>
      </Select>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="email"
        value={email}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="password"
        value={password}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  </main>
);
