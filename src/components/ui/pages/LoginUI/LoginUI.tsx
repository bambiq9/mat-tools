import type { FC } from "react";
import type { LoginUIProps } from "./type";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const FormCard = styled(Card)(({ theme }) => ({
  width: "80%",
  textAlign: "left",
  padding: theme.spacing(8),
  borderRadius: (theme.shape.borderRadius as number) * 4,
}));

export const LoginUI: FC<LoginUIProps> = ({
  handleSubmit,
  setEmail,
  setPassword,
}) => (
  <Box component={"main"}>
    <FormCard raised={true}>
      <Typography component={"h1"} variant={"h3"} sx={{ mb: 4 }}>
        Вход
      </Typography>
      <Box component={"form"} name="login" onSubmit={handleSubmit}>
        <Stack direction={"column"} spacing={2}>
          <FormControl>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="example@yandex.ru"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="••••••"
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ p: 2, fontSize: "1.1em" }}
          >
            Войти
          </Button>
        </Stack>
      </Box>
    </FormCard>
  </Box>
);
