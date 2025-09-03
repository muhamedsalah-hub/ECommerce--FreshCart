//Components
import { Icons } from "../Icons/Icons";

//Other Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//React Router
import { Link, useNavigate } from "react-router";
import { useLoginData } from "../Login/UseLoginData";

//React Redux
import { signOut } from "../../Features/CurrentUser/UserLoginSlice";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { useAppSelector } from "../../Features/Store/Store";

export const MainNavBar = () => {
  const navigate = useNavigate();
  const numberOfCartItems = useAppSelector((state) => {
    return state.cart.numberOfCartItems;
  });

  const { dispatch } = useLoginData();

  const handleSignOutBtn = () => {
    dispatch(signOut());
    dispatch(showToaster());
    navigate("/Login");
    dispatch(changeMessage("User Logged Out successfully"));
    setTimeout(() => {
      dispatch(hideToaster());
    }, 3000);
  };

  return (
    <>
      <nav className="bg-[#F8F9FA] border-gray-200 shadow-xs ">
        <div className="container mx-auto p-4 lg:flex lg:flex-nowrap lg:items-center lg:justify-between  ">
          <div className="lg:flex lg:items-center ">
            <div>
              <svg className="w-46 h-10">
                <use xlinkHref="#icon-freshcart"></use>
              </svg>
            </div>
            <div>
              <ul className="font-medium md:flex lg:p-4  mt-4 rounded-lg  ">
                <Link to={"/Home"}>
                  <li
                    className={
                      "block pb-2 px-3 text-gray-500 text-lg rounded-sm cursor-pointer"
                    }
                  >
                    Home
                  </li>
                </Link>
                <Link to={"/Cart"}>
                  <li className="block pb-3 px-3 text-gray-500 text-lg rounded-sm cursor-pointer ">
                    Cart
                  </li>
                </Link>
                <Link to={"/WishList"}>
                  <li className="block pb-3 px-3 text-gray-500 text-lg rounded-sm cursor-pointer ">
                    Wishlist
                  </li>
                </Link>
                <Link to={"/Products"}>
                  <li className="block pb-3 px-3 text-gray-500  text-lg rounded-sm cursor-pointer ">
                    Products
                  </li>
                </Link>
                <Link to={"/Categories"}>
                  <li className="block pb-3 px-3 text-gray-500  text-lg rounded-sm cursor-pointer ">
                    Categories
                  </li>
                </Link>
                <Link to={"/Brands"}>
                  <li className="block pb-3 px-3 text-gray-500  text-lg rounded-sm cursor-pointer ">
                    Brands
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-lg mt-2 lg:ms-2 lg:flex">
              <div className="relative">
                <Link to={"/Cart"}>
                  <FontAwesomeIcon
                    className="cart hover:text-black"
                    size="2x"
                    icon={faCartShopping}
                  />
                </Link>
                <div className="size-8 absolute z-50 -top-1/2 left-0 flex justify-center items-center rounded-full bg-main-color">
                  <span className="text-white">{numberOfCartItems}</span>
                </div>
              </div>
              <div className="mt-2 lg:mt-0">
                <button
                  onClick={handleSignOutBtn}
                  className="ms-3 cursor-pointer"
                >
                  SignOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Icons />
    </>
  );
};
