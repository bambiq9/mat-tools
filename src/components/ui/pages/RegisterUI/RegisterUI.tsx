import type { FC } from "react";
import type { RegisterUIProps } from "./type";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import type { UserRole } from "@utils/types";

const FormCard = styled(Card)(({ theme }) => ({
  width: "80%",
  textAlign: "left",
  padding: theme.spacing(8),
  borderRadius: (theme.shape.borderRadius as number) * 4,
}));

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
  <Box component={"main"}>
    <FormCard raised={true}>
      <Typography component={"h1"} variant={"h3"} sx={{ mb: 4 }}>
        Регистрация
      </Typography>
      <Box component={"form"} name="register" onSubmit={handleSubmit}>
        <Stack direction={"column"} spacing={2}>
          <FormControl>
            <FormLabel htmlFor="name">Имя</FormLabel>
            <TextField
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Ваше имя"
              id="name"
              value={name}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="role">Должность</FormLabel>
            <Select<UserRole>
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"assembly"}>Слесарь МСР</MenuItem>
              <MenuItem value={"electric"}>Электромонтажник</MenuItem>
              <MenuItem value={"refrigeration"}>
                Монтажник холодильного оборудования
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="example@yandex.ru"
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••"
              value={password}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ p: 2, fontSize: "1.1em" }}
          >
            Зарегистрироваться
          </Button>
        </Stack>
      </Box>
    </FormCard>
  </Box>
);
