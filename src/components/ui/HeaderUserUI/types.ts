import type { TUser } from "@utils/types";

export type THeaderUserUIProps = {
  isAuth: boolean;
  user: TUser | null;
  logoutHandler: () => void;
};
