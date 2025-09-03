//Components
import { Icons } from "../Icons/Icons";

//React Router
import { Link } from "react-router";

export const AuthNavBar = () => {
  return (
    <>
      <nav className="bg-[#F8F9FA] border-gray-200 shadow-xs ">
        <div className="container md:flex md:flex-nowrap md:items-center md:justify-between mx-auto p-4">
          <div>
            <svg className="w-46 h-10">
              <use xlinkHref="#icon-freshcart"></use>
            </svg>
          </div>
          <div className="md:flex items-center md:gap-x-5" id="navbar-default">
            <div className="text-gray-500 text-lg mt-2">
              <Link to={"/Login"}>
                <button className="cursor-pointer">Login</button>
              </Link>
            </div>
            <div className="text-gray-500 text-lg mt-2">
              <Link to={"/Register"}>
                <button className=" cursor-pointer">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Icons />
    </>
  );
};
