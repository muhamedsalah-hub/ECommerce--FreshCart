//Other LIbraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

//Custom Hook
import { useCart } from "./useCart";

//Interfaces
import { ICartProducts } from "../../cors/InterFaces/InterFaces";

//React Router
import { useLocation } from "react-router";

export const CartList = ({
  cartProduct,
  paymentMethod,
}: {
  cartProduct: ICartProducts;
  paymentMethod?: string | undefined;
}) => {
  const { handleAddAndRemoveProductQuantity, handleRemoveCartItem } = useCart();
  const location = useLocation();

  return (
    <>
      <div className=" p-4 lg:flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <div className="size-60">
            <img
              src={cartProduct.productImage}
              className="w-full h-full object-cover"
              alt={cartProduct.productTitle}
              width={"240"}
              height={"240"}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-xl">{cartProduct.productTitle}</h3>
            <h4 className="text-lg font-medium">
              {cartProduct.productCategory}
            </h4>
            <h4
              className={
                "text-lg font-medium" +
                (location.pathname.includes("AllOrders") ? "" : " hidden")
              }
            >
              Payment Method : {paymentMethod}
            </h4>
            <span className="text-lg font-medium text-main-color">
              {cartProduct.productPrice} EGP
            </span>
          </div>
        </div>
        <div className="flex gap-x-5 my-5 justify-between lg:flex-col gap-y-5 h-full">
          <button
            onClick={() => {
              handleRemoveCartItem(cartProduct.productId);
            }}
            className={
              "cursor-pointer py-3 px-4 text-white border border-red-500 text-md text-md focus:outline-none bg-red-600 rounded-lg hover:bg-red-500  transition duration-200 " +
              (location.pathname.includes("AllOrders") ? " hidden" : " ")
            }
          >
            <FontAwesomeIcon icon={faTrash} color="white" />
            Remove
          </button>
          <div className="flex justify-center gap-x-2 items-center">
            <div
              onClick={() => {
                handleAddAndRemoveProductQuantity(
                  cartProduct.productId,
                  ++cartProduct.productCount
                );
              }}
              className={
                "cursor-pointer p-2 size-7 border border-green-500 rounded-full flex items-center justify-center hover:bg-white " +
                (location.pathname.includes("AllOrders") ? " hidden" : " ")
              }
            >
              <FontAwesomeIcon color="green" icon={faPlus} />
            </div>
            <span className="text-2xl">{cartProduct.productCount}</span>
            <div
              onClick={() => {
                handleAddAndRemoveProductQuantity(
                  cartProduct.productId,
                  --cartProduct.productCount
                );
              }}
              className={
                "cursor-pointer p-2 size-7 border border-red-500 rounded-full flex items-center justify-center hover:bg-white " +
                (location.pathname.includes("AllOrders") ? " hidden" : " ")
              }
            >
              <FontAwesomeIcon color="red" icon={faMinus} />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
    </>
  );
};
