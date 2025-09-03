//Components
import { AuthNavBar } from "../AuthNavBar/AuthNavBar";
import { FooterComponent } from "../Footer/FooterComponent";

//React Hooks
import { useEffect } from "react";

import { ToastComponent } from "../Toaster/ToastComponent";

//React Router
import { Link } from "react-router";

//Custom Hook
import { useLoginData } from "./UseLoginData";

export default function LoginComponent() {
  const { LoginuserData, setLoginUserData, handleLoginBtn, token, navigate } =
    useLoginData();

  useEffect(() => {
    if (token) {
      navigate("/Home");
    }
  }, [navigate, token]);

  const BtnIsDisabled =
    LoginuserData.email == "" || LoginuserData.password == "" ? true : false;

  return (
    <>
      <ToastComponent />
      <AuthNavBar />
      <div className="mt-10 min-h-screen">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-3/4 mx-auto"
        >
          <div>
            <h3 className="text-xl font-medium">Login Now :</h3>
          </div>
          <div className="my-8">
            <div>
              <label
                htmlFor="email-input"
                className="block mb-2 text-md  text-gray-900"
              >
                Email :
              </label>
              <input
                value={LoginuserData.email}
                onChange={(e) => {
                  setLoginUserData({ ...LoginuserData, email: e.target.value });
                }}
                type="email"
                required
                id="email-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
          </div>
          <div className="my-5">
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Password :
              </label>
              <input
                value={LoginuserData.password}
                required
                onChange={(e) => {
                  setLoginUserData({
                    ...LoginuserData,
                    password: e.target.value,
                  });
                }}
                autoComplete="off"
                type="password"
                id="password-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
          </div>
          <div>
            <Link to={"/Login/ResetPassword"}>
              <h1 className="text-lg font-medium cursor-pointer underline w-fit hover:text-main-color transition duration-200">
                Reset Password ?
              </h1>
            </Link>
          </div>
          <div className="text-end">
            <button
              disabled={BtnIsDisabled}
              onClick={handleLoginBtn}
              className={
                BtnIsDisabled
                  ? " rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none text-white bg-gray-400"
                  : "cursor-pointer mt-3 text-white bg-main-color focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] "
              }
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-15">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
