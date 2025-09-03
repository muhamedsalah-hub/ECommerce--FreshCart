//Components
import { FooterComponent } from "../Footer/FooterComponent";
import { MainNavBar } from "../MainNavBar/MainNavBar";

//React Hooks
import { useEffect } from "react";

//Custom Hook
import { useAllOrders } from "./useAllOrders";
import { userOrdersApi } from "../../Features/CurrentUser/userOrdersSlice";
import { CartList } from "../Cart/CartList";

export default function AllOrders() {
  const { id, dispatch, orderDetails } = useAllOrders();

  useEffect(() => {
    dispatch(userOrdersApi(id));
  }, []);

  return (
    <>
      <MainNavBar />
      <div className="container mx-auto p-4">
        {orderDetails.map((order) =>
          order.cartItems.map((cartItem) => {
            return (
              <div key={cartItem.productId}>
                <CartList
                  paymentMethod={order.paymentMethodType}
                  cartProduct={cartItem}
                />
              </div>
            );
          })
        )}
      </div>
      <FooterComponent />
    </>
  );
}
