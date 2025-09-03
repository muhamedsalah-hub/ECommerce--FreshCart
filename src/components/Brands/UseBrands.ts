//React Redux
import { useAppDispatch, useAppSelector } from "../../Features/Store/Store";

//interfaces
import { IBrands } from "../../cors/InterFaces/InterFaces";

//React Hooks

export const UseBrands = () => {
  const dispatch = useAppDispatch();

  const brands: IBrands[] = useAppSelector((state) => {
    return state.brands.brands;
  });

  return { brands, dispatch };
};
