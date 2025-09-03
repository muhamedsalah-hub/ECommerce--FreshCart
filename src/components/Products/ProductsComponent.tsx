//Components
import { ProductLists } from "./ProductLists";
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { ToastComponent } from "../Toaster/ToastComponent";

//React Hooks
import { useEffect } from "react";

//React Router
import { Link, useLocation } from "react-router";

//Custom Hook
import { useProducts } from "./UseProducts";

//Redux
import { ProductsApi } from "../../Features/Products/ProductSlice";

export default function ProductsComponent() {
  const {
    filteredProducts,
    page,
    numberOfPages,
    handleSrcoll,
    dispatch,
    handleAddToCartBtn,
    handleAddToWishList,
    searchedProduct,
    setSearchedProduct,
  } = useProducts();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from === "Home") {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleSrcoll);

    (async function () {
      await dispatch(ProductsApi({ limit: 28, page: page }));
    })();

    return () => {
      window.removeEventListener("scroll", handleSrcoll);
    };
  }, [page, numberOfPages, dispatch]);

  return (
    <div>
      <ToastComponent />
      <MainNavBar />
      <div className="container mx-auto p-4">
        <div className="mt-10 text-center w-3/4 mx-auto">
          <input
            value={searchedProduct}
            onChange={(e) => {
              setSearchedProduct(e.target.value);
            }}
            autoComplete="on"
            placeholder="Search....."
            type="text"
            id="search-input"
            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          />
        </div>
        <div className="grid p-5 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-y-10">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.productId}
                className="card p-8  bg-white shadow-gray-500 border border-gray-100 rounded-lg cursor-pointer hover:overflow-visible hover:ring-3 hover:ring-main-color transition-all duration-600 delay-75   "
              >
                <Link to={`ProductDetails/${product.productId}`}>
                  <ProductLists
                    handleAddToCartBtn={handleAddToCartBtn}
                    handleAddToWishList={handleAddToWishList}
                    product={product}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
