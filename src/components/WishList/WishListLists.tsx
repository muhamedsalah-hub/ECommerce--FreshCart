type IWishList = {
  productId: string;
  productName: string;
  productCategory: string;
  productImage: string;
  productPrice: number;
};

export const WishListLists = ({
  wishList,
  handleDeleteWishList,
  handleAddToCartBtn,
}: {
  wishList: IWishList;
  handleDeleteWishList: (productId: string) => Promise<void>;
  handleAddToCartBtn: (productId: string) => Promise<void>;
}) => {
  return (
    <>
      <div className=" p-4 lg:flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <div className="size-60">
            <img
              src={wishList?.productImage}
              className="w-full h-full object-cover"
              alt={wishList.productName}
              width={"240"}
              height={"240"}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-xl">{wishList?.productName}</h3>
            <h4 className="text-lg font-medium">{wishList?.productCategory}</h4>
            <span className="text-lg font-medium text-main-color">
              {wishList?.productPrice} EGP
            </span>
          </div>
        </div>
        <div className="my-5 flex flex-col gap-y-5 h-full">
          <button
            onClick={() => {
              handleAddToCartBtn(wishList.productId);
            }}
            className="cursor-pointer py-3 px-4 text-black border border-main-color text-md text-md focus:outline-none bg-white rounded-lg hover:bg-main-color hover:text-white transition duration-200 "
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              handleDeleteWishList(wishList.productId);
            }}
            className="cursor-pointer py-3 px-4 text-black border border-red-500 text-md text-md focus:outline-none bg-white rounded-lg hover:bg-red-500 hover:text-white transition duration-200 "
          >
            Delete
          </button>
        </div>
      </div>
      <hr className="border-gray-200" />
    </>
  );
};
