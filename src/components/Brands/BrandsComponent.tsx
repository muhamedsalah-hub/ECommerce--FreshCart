//Components
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { BrandsList } from "./BrandsList";

//Custom Hook
import { UseBrands } from "./UseBrands";

//React Hooks
import { useEffect } from "react";

//Redux
import { BrandsApi } from "../../Features/Brands/BrandsSlice";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";

export default function BrandsComponent() {
  const { brands, dispatch } = UseBrands();

  useEffect(() => {
    dispatch(showSpinner());
    (async function () {
      await dispatch(BrandsApi());
      dispatch(hideSpinner());
    })();
  }, [brands]);

  return (
    <>
      <MainNavBar />
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="font-medium text-5xl text-main-color my-5">
            All Brands
          </h1>
        </div>
        <div className="grid grid-cols-3 auto-rows-[400px] gap-10">
          {brands.map((brand) => {
            return (
              <div
                key={brand.brandId}
                className="p-4 bg-white border border-gray-100 shadow-gray-100 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-main-color transition-all duration-500 delay-75 "
              >
                <BrandsList brand={brand} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
