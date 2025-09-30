import { HeaderUI } from "@components/ui/HeaderUI";
import { useDispatch, useSelector } from "@services/store";
import { logoutUser, selectIsAuth, selectUser } from "@services/userSlice";
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
    to: "scheme-filter",
    label: "Фильтр чертежей",
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const logoutHandler = () => dispatch(logoutUser());

  return (
    <HeaderUI
      links={links}
      isAuth={isAuth}
      user={user}
      logoutHandler={logoutHandler}
    />
  );
};
