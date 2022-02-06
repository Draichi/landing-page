import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { getModelByName, registerModel, unregisterModel } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisterModel(modelName),
    [unregisterModel, modelName]
  );

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  );

  return {
    getModel,
    registerModel,
  };
}
