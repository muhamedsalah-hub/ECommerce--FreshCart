//CSS
import "./HomePage.css";

//React states
import { useEffect } from "react";

//Components
// const FooterComponent = lazy(() => import(`../Footer/FooterComponent`));
import { FooterComponent } from "../Footer/FooterComponent";
import { Icons } from "../Icons/Icons";
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { ProductLists } from "../Products/ProductLists";
import { HomeSlider } from "../Slider/HomeSlider";
import { ToastComponent } from "../Toaster/ToastComponent";
import { CategorisSlider } from "../Slider/CategoriesSlider";

//React Router
import { useNavigate, Link } from "react-router";

//React Redux
import { ProductsApi } from "../../Features/Products/ProductSlice";
import { CategoriesApi } from "../../Features/Categories/CategoriesSlice";

//Custom Hooks
import { useProducts } from "../Products/UseProducts";
import { UseCategories } from "../Categories/UseCategories";
import { UseSlider } from "../Slider/UseSlider";

export default function HomePage() {
  //React Router
  const navigate = useNavigate();

  const {
    filteredProducts,
    dispatch,
    handleAddToCartBtn,
    handleAddToWishList,
    searchedProduct,
    setSearchedProduct,
  } = useProducts();
  const { categoriesImages } = UseCategories();
  const { Homesettings, Categorysettings, images } = UseSlider();

  //React Hooks
  useEffect(() => {
    (async function () {
      dispatch(CategoriesApi());
      await dispatch(ProductsApi({ limit: 28, page: 1 }));
    })();
  }, [dispatch]);

  const handleSeeMoreClicked = () => {
    navigate("/Products", { state: { from: "Home" } });
  };

  return (
    <>
      <ToastComponent />
      <MainNavBar />
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1 lg:grid-cols-[70%_minmax(0,30%)] mb-10">
          <div className="mb-6 lg:mb-0">
            <HomeSlider images={images} settings={Homesettings} />
          </div>
          <div>
            <div>
              <img
                width={"450"}
                height={"110"}
                src="../../../images/Menified/grocery-banner.webp"
                className="h-[110px] w-full object-cover"
                alt="grocery image"
              />
            </div>
            <div>
              <img
                width={"450"}
                height={"110"}
                src="../../../images/Menified/grocery-banner-2.webp"
                className="h-[110px] w-full object-cover"
                alt="grocery image"
              />
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-4xl font-medium text-main-color">
            Popular Categories
          </h1>
        </div>
        <div>
          <CategorisSlider
            images={categoriesImages}
            settings={Categorysettings}
          />
        </div>
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
                className="card p-8  bg-white shadow-gray-500 border border-gray-100 rounded-lg cursor-pointer hover:overflow-visible hover:ring-3 hover:ring-main-color transition-all duration-600 delay-75 "
              >
                <Link to={`/Products/ProductDetails/${product.productId}`}>
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
        <div onClick={handleSeeMoreClicked} className="text-center my-10">
          <h1 className="underline font-medium text-xl cursor-pointer">
            See more
          </h1>
        </div>
      </div>
      <FooterComponent />
      <Icons />
    </>
  );
}
