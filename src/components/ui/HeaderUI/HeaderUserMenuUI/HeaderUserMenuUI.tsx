import {
  Toolbar,
  Avatar,
  Stack,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import type { FC } from "react";
import type { THeaderUserMenuUIProps } from "./type";

export const HeaderUserMenuUI: FC<THeaderUserMenuUIProps> = ({
  user,
  logoutHandler,
}) => {
  return (
    <Toolbar sx={{ gap: 2 }}>
      <Avatar>{user?.name[0]}</Avatar>
      <Stack>
        <Typography>{user?.name}</Typography>
        <Typography>{user?.role[0]}</Typography>
      </Stack>
      <Divider orientation="vertical" />
      <Button onClick={logoutHandler}>Выйти</Button>
    </Toolbar>
  );
};
