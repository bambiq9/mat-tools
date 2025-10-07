import { SchemeListUI } from "@components/ui/pages/SchemeListUI";
import { useEffect, useState, type FC } from "react";
import type { TAssemblyUnitPart } from "@utils/types";
import { useDispatch, useSelector } from "@services/store";
import {
  getAssemblyUnitPartsList,
  selectUnitPartsList,
} from "@services/assemblySlice";
import { useLocation } from "react-router-dom";

export const SchemeList: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const parts = useSelector(selectUnitPartsList);

  useEffect(() => {
    dispatch(getAssemblyUnitPartsList());
  }, []);

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
  }, [filter, parts]);

  return (
    <SchemeListUI
      parts={filteredParts}
      filter={filter}
      filterHandler={setFilter}
      locationState={{ background: location }}
    />
  );
};
