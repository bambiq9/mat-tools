import type { TUser } from "@utils/types";
import type { FC, ReactNode } from "react";
import type { THeaderUserMenuUIProps } from "./HeaderUserMenuUI/type";

export type THeaderLink = {
  to: string;
  label: string;
};

export type THeaderUIProps = {
  links: THeaderLink[];
  userMenu: ReactNode;
};
