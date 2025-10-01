import type { TUser } from "@utils/types";

export type THeaderUserMenuUIProps = {
  logoutHandler: () => void;
  user: TUser | null;
};
