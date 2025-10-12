import { SchemeListUI } from "@components/ui/pages/SchemeListUI";
import { useEffect, useState, type FC } from "react";
import type { TAssemblyUnitPart } from "@utils/types";
import { useDispatch, useSelector } from "@services/store";
import {
  getAssemblyUnitPartsList,
  getAssemblyUnitsList,
  selectUnit,
  selectUnitPartsList,
  selectUnitsList,
  setUnit,
} from "@services/assemblySlice";
import { useLocation } from "react-router-dom";
import type { SelectChangeEvent } from "@mui/material";

export const SchemeList: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const initialParts = useSelector(selectUnitPartsList);
  const unitsList = useSelector(selectUnitsList);
  const unit = useSelector(selectUnit);

  const [parts, setParts] = useState<TAssemblyUnitPart[]>(initialParts);
  const [filter, setFilter] = useState<string>("");
  const [filteredParts, setFilteredParts] =
    useState<TAssemblyUnitPart[]>(parts);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAssemblyUnitsList());
    dispatch(getAssemblyUnitPartsList());
  }, []);

  useEffect(() => {
    setParts(initialParts);
  }, [initialParts]);

  useEffect(() => {
    if (!selectedUnit) {
      setParts(initialParts);
      return;
    }

    dispatch(setUnit(selectedUnit));
    const parts = initialParts.filter((currentPart) =>
      unit?.parts.some((part) => part.partId === currentPart.id),
    );

    setParts(parts);
  }, [selectedUnit, unit]);

  useEffect(() => {
    const lowerCaseFilter = filter.toLowerCase();
    const filteredParts = parts.filter(
      (part) =>
        part.blueprint?.id.toLowerCase().includes(lowerCaseFilter) ||
        part.name.toLowerCase().includes(lowerCaseFilter),
    );

    setFilteredParts(filteredParts);
  }, [filter, parts]);

  return (
    <SchemeListUI
      parts={filteredParts}
      filter={filter}
      filterHandler={setFilter}
      unit={unit}
      selectedUnitId={selectedUnit}
      unitsList={unitsList}
      selectUnitHandler={setSelectedUnit}
      locationState={{ background: location }}
    />
  );
};
