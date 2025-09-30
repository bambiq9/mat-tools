import type { FC } from "react";
import type { THeaderUserUIProps } from "./types";
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import type { TUser } from "@utils/types";

const AuthMenu: FC = () => {
  return (
    <Toolbar>
      <ButtonGroup>
        <NavLink to="login">
          <Button>Войти</Button>
        </NavLink>
        <NavLink to="register">
          <Button>Регистрация</Button>
        </NavLink>
      </ButtonGroup>
    </Toolbar>
  );
};

const UserMenu: FC<Partial<THeaderUserUIProps>> = ({ user, logoutHandler }) => {
  return (
    <Toolbar sx={{ gap: 2 }}>
      <Avatar>{user?.name}</Avatar>
      <Stack>
        <Typography>{user?.name || "Гость"}</Typography>
        <Typography>{user?.role[0] || "Гость"}</Typography>
      </Stack>
      <Divider orientation="vertical" />
      <Button onClick={logoutHandler}>Выйти</Button>
    </Toolbar>
  );
};

export const HeaderUserUI: FC<THeaderUserUIProps> = ({
  isAuth,
  user,
  logoutHandler,
}) => {
  return isAuth && user ? (
    <UserMenu user={user} logoutHandler={logoutHandler} />
  ) : (
    <AuthMenu />
  );
};
