import { SchemeListUI } from "@components/ui/pages/SchemeListUI";
import { useEffect, useState, type FC } from "react";
import type { TAssemblyUnitPart } from "@utils/types";
import { useDispatch, useSelector } from "@services/store";
import { getAssemblyUnitPartsList } from "@services/assemblySlice";
import { Link, useLocation } from "react-router-dom";

const parts: TAssemblyUnitPart[] = [
  {
    id: "part-001",
    name: "Компрессор Bitzer 4GE-25.2Y",
    blueprint: { id: "bp-001", date: new Date("2024-06-12T00:00:00.000Z") },
    date: new Date("2024-04-01T00:00:00.000Z"),
  },
  {
    id: "part-002",
    name: "Испарительный блок EVAP-3000",
    blueprint: { id: "bp-002", date: new Date("2024-06-12T00:00:00.000Z") },
    date: new Date("2024-06-12T00:00:00.000Z"),
  },
  {
    id: "part-003",
    name: "Конденсатор воздушного охлаждения COND-AIR-500",
    blueprint: { id: "bp-003", date: new Date("2024-06-12T00:00:00.000Z") },
    date: new Date("2024-09-05T00:00:00.000Z"),
  },
  {
    id: "part-004",
    name: "Панель управления HVAC-CTRL-PRO",
    date: new Date("2024-07-18T00:00:00.000Z"),
  },
  {
    id: "part-005",
    name: "Виброизоляционные крепления для подвижного состава",
    blueprint: { id: "bp-002", date: new Date("2024-06-12T00:00:00.000Z") },
    date: new Date("2024-06-30T00:00:00.000Z"),
  },
];

export const SchemeList: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAssemblyUnitPartsList());
  }, []);

  // const parts = useSelector();

  const [filter, setFilter] = useState<string>("");
  const [filteredParts, setFilteredParts] =
    useState<TAssemblyUnitPart[]>(parts);

  useEffect(() => {
    const lowerCaseFilter = filter.toLowerCase();
    const filteredParts = parts.filter(
      (part) =>
        part.blueprint?.id.toLowerCase().includes(lowerCaseFilter) ||
        part.name.toLowerCase().includes(lowerCaseFilter),
    );

    setFilteredParts(filteredParts);
  }, [filter]);

  return (
    <SchemeListUI
      parts={filteredParts}
      filter={filter}
      filterHandler={setFilter}
      locationState={{ background: location }}
    />
  );
};
