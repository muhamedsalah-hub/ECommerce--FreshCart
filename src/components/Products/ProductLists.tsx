//React Hooks
import { useState } from "react";

//Other LIbraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//Interfaces
import { IProducts } from "../../cors/InterFaces/InterFaces";

export const ProductLists = ({
  product,
  handleAddToWishList,
  handleAddToCartBtn,
}: {
  product: IProducts;
  handleAddToWishList: (productId: string) => Promise<void>;
  handleAddToCartBtn: (productId: string) => Promise<void>;
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div>
        <img
          className="h-full object-cover w-full"
          src={product.productImage}
          alt={product.productName}
          width={"285"}
          height={"390"}
        />
      </div>
      <div className="p-4">
        <h1 className="text-main-color">{product.productCategory}</h1>
        <h3 className="font-medium">
          {product.productName?.split(" ", 2).join(" ")}
        </h3>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-light">{product.productPrice} EGP</span>
          <span className="flex items-center gap-x-1">
            <svg className="size-5 ">
              <use xlinkHref="#icon-star"></use>
            </svg>
            {product.productRate}
          </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className=" text-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCartBtn(product.productId);
              }}
              className="cursor-pointer px-10 py-2 text-white text-sm text-md focus:outline-none bg-main-color rounded-lg hover:bg-[#549355]  "
            >
              Add +
            </button>
          </div>
          <div className="flex justify-end">
            <div>
              <FontAwesomeIcon
                onClick={(e) => {
                  e.preventDefault();
                  setClicked((clicked) => !clicked);
                  handleAddToWishList(product.productId);
                }}
                size="2xl"
                color={clicked ? "red" : ""}
                icon={faHeart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
