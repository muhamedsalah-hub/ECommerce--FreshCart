//Components
import { MainNavBar } from "../MainNavBar/MainNavBar";

import { CategoriesList } from "./CategoriesList";

//Redux
import { CategoriesApi } from "../../Features/Categories/CategoriesSlice";

//Custom Hook
import { UseCategories } from "./UseCategories";

//React hooks
import { useEffect } from "react";

export default function CategoriesComponent() {
  const {
    categoryName,
    categories,
    subCategories,
    handleSubCategories,
    dispatch,
  } = UseCategories();

  useEffect(() => {
    (async function () {
      await dispatch(CategoriesApi());
    })();
  }, [dispatch]);

  return (
    <>
      <MainNavBar />
      <div className="container mx-auto p-4">
        <div className="text-center my-5">
          <h1 className="font-medium text-main-color text-5xl">
            All Categories
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-10">
          {categories.map((category) => {
            return (
              <div
                onClick={() => {
                  handleSubCategories(
                    category.categoryId,
                    category.categoryName
                  );
                }}
                key={category.categoryId}
                className="p-4 bg-white border border-gray-100 shadow-gray-100 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-main-color transition-all duration-500 delay-75 "
              >
                <CategoriesList category={category} />
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center text-4xl">
          <h1 className="text-main-color font-medium">{categoryName}</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-items-center my-5 gap-4">
          {subCategories.map((subCategory) => {
            return (
              <div
                key={subCategory.subCategoryId}
                className="cursor-pointer mt-5 w-full text-center hover:shadow-md hover:shadow-main-color transition duration-300 delay-75"
              >
                <h1 className="border text-3xl font-medium py-5 px-10  rounded-lg ">
                  {subCategory.subCategoryName}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
