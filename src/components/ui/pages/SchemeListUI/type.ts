import type { SelectChangeEvent } from "@mui/material";
import type { TAssemblyUnit, TAssemblyUnitPart } from "@utils/types";
import type { Location } from "react-router-dom";

export type TSchemeListUIProps = {
  parts: TAssemblyUnitPart[];
  filter: string;
  filterHandler: (filter: string) => void;
  unit: TAssemblyUnit | null;
  selectedUnitId: string | null;
  selectUnitHandler: (unitId: string) => void;
  unitsList: TAssemblyUnit[];
  locationState: { background: Location };
};
