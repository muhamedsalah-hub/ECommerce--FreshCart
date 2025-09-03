//Components
import { useState } from "react";
import { AuthNavBar } from "../AuthNavBar/AuthNavBar";
import { FooterComponent } from "../Footer/FooterComponent";

//API Requests
import { NewPassword } from "../../cors/services/NewPassword";

//React Router
import { useNavigate } from "react-router";

//React Redux
import { useAppDispatch } from "../../Features/Store/Store";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { ToastComponent } from "../Toaster/ToastComponent";

export default function UpdatePasswordComponent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    email: "",
    newPassword: "",
  });

  const handleUpdateBtn = async () => {
    try {
      await NewPassword(newUserData);

      dispatch(showToaster());
      dispatch(changeMessage("Password updated successfully"));
      navigate("/Login");
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error.response.data.message;

      dispatch(showToaster());
      dispatch(changeMessage(msg));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  const BtnIsDisabled =
    newUserData.email == "" || newUserData.newPassword == "" ? true : false;

  return (
    <>
      <ToastComponent />
      <AuthNavBar />
      <div className="container mx-auto p-4">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="my-8">
            <div>
              <label className="block font-medium mb-2 text-md  text-gray-900">
                Email :
              </label>
              <input
                required
                value={newUserData.email}
                onChange={(e) => {
                  setNewUserData({ ...newUserData, email: e.target.value });
                }}
                type="email"
                id="email-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
          </div>
          <div className="my-5">
            <div>
              <label className="font-medium block mb-2 text-md  text-gray-900">
                New-Password :
              </label>
              <input
                required
                value={newUserData.newPassword}
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    newPassword: e.target.value,
                  });
                }}
                autoComplete="off"
                type="password"
                id="password-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <div className="my-5">
              <button
                disabled={BtnIsDisabled}
                onClick={handleUpdateBtn}
                className={
                  BtnIsDisabled
                    ? " rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none text-white bg-gray-400"
                    : "cursor-pointer mt-3 text-white bg-main-color focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] "
                }
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <FooterComponent />
      </div>
    </>
  );
}
