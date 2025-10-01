import { AppBar, Button, Toolbar } from "@mui/material";
import type { FC } from "react";
import { NavLink } from "react-router-dom";
import type { THeaderUIProps } from "./type";

export const HeaderUI: FC<THeaderUIProps> = ({ links, userMenu }) => {
  return (
    <AppBar
      color="transparent"
      position="fixed"
      sx={{ flexDirection: "row", justifyContent: "space-between", p: 2 }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {links.map((link, index) => (
          <NavLink to={link.to} key={index}>
            {({ isActive }) =>
              isActive ? (
                <Button size="large" variant="outlined">
                  {link.label}
                </Button>
              ) : (
                <Button size="large" variant="text">
                  {link.label}
                </Button>
              )
            }
          </NavLink>
        ))}
      </Toolbar>
      {userMenu}
    </AppBar>
  );
};
