import type {
  TAssemblyUnit,
  TAssemblyUnitPart,
  TAssemblyUnitParts,
  TBlueprint,
} from "./types";

export const isDate = (data: any): boolean => {
  return !isNaN(Date.parse(data));
};

export const isBlueprint = (data: any): data is TBlueprint => {
  return data && typeof data.id === "string" && isDate(data.date);
};

export const isAssemblyUnit = (data: any): data is TAssemblyUnit => {
  return (
    data &&
    typeof data.id === "string" &&
    typeof data.name === "string" &&
    isAssemblyUnitPartsArray(data.parts) &&
    isBlueprint(data.blueprint) &&
    isDate(data.date)
  );
};

export const isAssemblyUnitPartsArray = (
  data: any[],
): data is TAssemblyUnitParts[] => {
  return (
    Array.isArray(data) &&
    typeof data[0].partId === "string" &&
    typeof data[0].quantity === "number"
  );
};

export const isAssemblyUnitPart = (data: any): data is TAssemblyUnitPart => {
  return (
    data &&
    data.id === "string" &&
    data.name === "string" &&
    isBlueprint(data.blueprint) &&
    isDate(data.date)
  );
};
