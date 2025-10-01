import type { ReactElement } from "react";

export type TProtectedRouteProps = {
  children: ReactElement;
  isUnAuthOnly: boolean;
};
