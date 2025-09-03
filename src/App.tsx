//App CSS
import "./App.css";
import { lazy, Suspense } from "react";

//Components
const HomePage = lazy(() => import("./components/Home/HomePage"));
const LoginComponent = lazy(() => import("./components/Login/LoginComponent"));
const RegisterComponent = lazy(
  () => import("./components/Register/RegisterComponent")
);
const ResetPasswordComponent = lazy(
  () => import("./components/ResetPassword/ResetPasswordComponent")
);
const UpdatePasswordComponent = lazy(
  () => import("./components/UpdatePassword/UpdatePasswordComponent")
);
const ProductsComponent = lazy(
  () => import("./components/Products/ProductsComponent")
);

const ProductDetails = lazy(
  () => import("./components/ProductDetails/ProductDetails")
);

const Cart = lazy(() => import("./components/Cart/Cart"));

const CategoriesComponent = lazy(
  () => import("./components/Categories/CategoriesComponent")
);

const BrandsComponent = lazy(
  () => import("./components/Brands/BrandsComponent")
);

const WishListComponent = lazy(
  () => import("./components/WishList/WishListComponent")
);

const CheckOut = lazy(() => import("./components/CheckOut/CheckOut"));

const AllOrders = lazy(() => import("./components/AllOrders/AllOrders"));

const ProtectedComponents = lazy(
  () => import("./components/ProtectedComponents")
);

const ErrorPageComponent = lazy(
  () => import("./components/ErrorPage/ErrorPageComponent")
);

const SpinnerComponent = lazy(
  () => import("./components/Spinner/SpinnerComponent")
);

//Redux
import { store } from "./Features/Store/Store";
import { Provider } from "react-redux";

//React Router
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerComponent />}>
          <Provider store={store}>
            <Routes>
              <Route path="/">
                <Route index element={<LoginComponent />} />
                <Route path="Register" element={<RegisterComponent />} />
                <Route path="Login">
                  <Route index element={<LoginComponent />} />
                  <Route
                    path="ResetPassword"
                    element={<ResetPasswordComponent />}
                  />
                  <Route
                    path="UpdatePassword"
                    element={<UpdatePasswordComponent />}
                  />
                </Route>
                <Route
                  path="Home"
                  element={
                    <ProtectedComponents>
                      <HomePage />
                    </ProtectedComponents>
                  }
                />
                <Route path="WishList" element={<WishListComponent />} />
                <Route path="Products">
                  <Route
                    index
                    element={
                      <ProtectedComponents>
                        <ProductsComponent />
                      </ProtectedComponents>
                    }
                  />
                  <Route
                    path="ProductDetails/:productId"
                    element={<ProductDetails />}
                  />
                </Route>
                <Route
                  path="Categories"
                  element={
                    <ProtectedComponents>
                      <CategoriesComponent />
                    </ProtectedComponents>
                  }
                />
                <Route
                  path="Brands"
                  element={
                    <ProtectedComponents>
                      <BrandsComponent />
                    </ProtectedComponents>
                  }
                />
                <Route
                  path="cart"
                  element={
                    <ProtectedComponents>
                      <Cart />
                    </ProtectedComponents>
                  }
                />
                <Route path="allorders" element={<AllOrders />} />
                <Route path="CheckOut/:cartId" element={<CheckOut />} />
                <Route path="*" element={<ErrorPageComponent />} />
              </Route>
            </Routes>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
