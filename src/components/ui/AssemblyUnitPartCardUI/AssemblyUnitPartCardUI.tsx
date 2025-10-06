import { Card, CardContent } from "@mui/material";
import type { TAssemblyUnitPartCardUIProps } from "./type";
import type { FC } from "react";

export const AssemblyUnitPartCardUI: FC<TAssemblyUnitPartCardUIProps> = ({
  part,
}) => {
  if (!part) return <p>test</p>;
  return (
    <Card>
      <CardContent>{part.name}</CardContent>
    </Card>
  );
};
