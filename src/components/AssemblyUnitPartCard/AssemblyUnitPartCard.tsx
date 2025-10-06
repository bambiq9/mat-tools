import { AssemblyUnitPartCardUI } from "@components/ui/AssemblyUnitPartCardUI";
import { getAssemblyUnitPart, selectUnitPart } from "@services/assemblySlice";
import { useDispatch, useSelector } from "@services/store";
import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";

export const AssemblyUnitPartCard: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    if (id) dispatch(getAssemblyUnitPart(id));
  }, []);

  const part = useSelector(selectUnitPart);

  return <AssemblyUnitPartCardUI part={part} />;
};
