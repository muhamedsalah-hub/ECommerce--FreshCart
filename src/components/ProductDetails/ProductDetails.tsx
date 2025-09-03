//Components
import { FooterComponent } from "../Footer/FooterComponent";
import { Icons } from "../Icons/Icons";
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { ProductDetailsSlider } from "./../Slider/ProductDetailsSlider";

import { ToastComponent } from "../Toaster/ToastComponent";

//Custom Hook
import { useProductDetails } from "./useProductDetails";
import { useProducts } from "../Products/UseProducts";

export default function ProductDetails() {
  const { specificProduct, specificProductSettings, productId } =
    useProductDetails();
  const { handleAddToCartBtn } = useProducts();

  return (
    <>
      <ToastComponent />
      <MainNavBar />
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="grid  md:grid-cols-2 gap-x-5">
            <div className="h-[500px] w-[300px] ">
              <ProductDetailsSlider
                settings={specificProductSettings}
                images={specificProduct?.productImages || []}
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <h3 className="text-2xl font-medium">
                {specificProduct?.productTitle}
              </h3>
              <p className="text-gray-500">
                {specificProduct?.productDescription}
              </p>
              <div className="flex-col flex gap-y-2">
                <span>{specificProduct?.productCategory}</span>
                <div className="flex justify-between">
                  <span>{specificProduct?.productPrice}</span>
                  <span className="flex items-center gap-x-1">
                    <svg className="size-5">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    {specificProduct?.productRate}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  handleAddToCartBtn(productId || "");
                }}
                className="text-center "
              >
                <button className="cursor-pointer py-2 px-20 text-white text-sm text-md focus:outline-none bg-main-color rounded-lg hover:bg-[#549355]  ">
                  Add to cart +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
      <Icons />
    </>
  );
}
