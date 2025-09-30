import type { TUser } from "@utils/types";

export type THeaderLink = {
  to: string;
  label: string;
};

export type THeaderUIProps = {
  links: THeaderLink[];
  isAuth: boolean;
  user: TUser | null;
  logoutHandler: () => void;
};
