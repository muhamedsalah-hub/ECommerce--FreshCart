//React Redux
import { useAppDispatch, useAppSelector } from "../../Features/Store/Store";

//React Hooks
import { useState } from "react";

//Interfaces
import { ICategories, ISubCategory } from "../../cors/InterFaces/InterFaces";
import { subCategoriesApi } from "../../Features/Categories/CategoriesSlice";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";

export const UseCategories = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const dispatch = useAppDispatch();

  const categories: ICategories[] = useAppSelector((state) => {
    return state.categories.categories;
  });

  const subCategories: ISubCategory[] = useAppSelector((state) => {
    return state.categories.subCategories;
  });

  const handleSubCategories = async (
    categoryId: string,
    categoryName: string
  ) => {
    dispatch(showSpinner());
    await dispatch(subCategoriesApi(categoryId));
    dispatch(hideSpinner());
    setCategoryName(categoryName);
  };

  const categoriesImages = categories.map((category) => {
    return {
      src: category.categoryImage,
    };
  });

  return {
    categoryName,
    categories,
    subCategories,
    handleSubCategories,
    dispatch,
    categoriesImages,
  };
};
