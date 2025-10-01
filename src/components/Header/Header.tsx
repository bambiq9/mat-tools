import { HeaderUI } from "@components/ui/HeaderUI";
import { HeaderAuthMenuUI } from "@components/ui/HeaderUI/HeaderAuthMenuUI";
import { HeaderUserMenuUI } from "@components/ui/HeaderUI/HeaderUserMenuUI";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "@services/store";
import {
  logoutUser,
  selectIsAuth,
  selectIsLoading,
  selectUser,
} from "@services/userSlice";
import type { FC } from "react";

const links = [
  {
    to: "/",
    label: "Главная",
  },
  {
    to: "insulation",
    label: "Изоляция",
  },
  {
    to: "scheme-list",
    label: "Список чертежей",
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const logoutHandler = () => dispatch(logoutUser());

  return (
    <HeaderUI
      links={links}
      userMenu={
        isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "20%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : user && isAuth ? (
          <HeaderUserMenuUI logoutHandler={logoutHandler} user={user} />
        ) : (
          <HeaderAuthMenuUI />
        )
      }
    />
  );
};
