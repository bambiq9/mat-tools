import type { TAssemblyUnitPart } from "@utils/types";

export type TSchemeListUIProps = {
  parts: TAssemblyUnitPart[];
  filter: string;
  filterHandler: (filter: string) => void;
};
