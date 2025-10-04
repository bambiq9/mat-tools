import type { TAssemblyUnit } from "./types";

export const isAssemblyUnit = (data: any): data is TAssemblyUnit => {
  return (
    data &&
    typeof data.id === "string" &&
    typeof data.name === "string" &&
    Array.isArray(data.parts) &&
    typeof data.blueprint.id === "string"
  );
};
