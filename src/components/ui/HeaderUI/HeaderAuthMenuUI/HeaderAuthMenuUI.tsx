import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { Toolbar, ButtonGroup, Button } from "@mui/material";

export const HeaderAuthMenuUI: FC = () => {
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
