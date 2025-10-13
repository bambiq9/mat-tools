import { AssemblyUnitPartCardUI } from "@components/ui/AssemblyUnitPartCardUI";
import { CircularProgress } from "@mui/material";
import {
  getAssemblyUnitPart,
  selectIsLoading,
  selectUnitPart,
} from "@services/assemblySlice";
import { useDispatch, useSelector } from "@services/store";
import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";

export const AssemblyUnitPartCard: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (id) dispatch(getAssemblyUnitPart(id));
  }, []);

  // if (isLoading) return <CircularProgress />

  const part = useSelector(selectUnitPart);

  return <AssemblyUnitPartCardUI part={part} />;
};
