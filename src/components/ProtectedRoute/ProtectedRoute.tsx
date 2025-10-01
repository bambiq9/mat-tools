import { useSelector } from "@services/store";
import { selectIsAuth, selectIsLoading } from "@services/userSlice";
import type { TProtectedRouteProps } from "./type";
import type { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  children,
  isUnAuthOnly,
}) => {
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsAuth);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isUnAuthOnly && isAuth) {
    const from = location.state?.from || { pathname: "/" };

    return <Navigate replace to={from} />;
  }

  if (!isUnAuthOnly && !isAuth) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }

  return children;
};
