import type { TAssemblyUnitPart } from "@utils/types";
import type { Location } from "react-router-dom";

export type TSchemeListUIProps = {
  parts: TAssemblyUnitPart[];
  filter: string;
  filterHandler: (filter: string) => void;
  locationState: { background: Location };
};
