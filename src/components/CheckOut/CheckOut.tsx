//Components
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { FooterComponent } from "../Footer/FooterComponent";
import { ToastComponent } from "../Toaster/ToastComponent";

//Custom Hook
import { useCheckOut } from "./useCheckOut";

//React Router
import { useParams } from "react-router";

export default function CheckOut() {
  const { userInfo, setUserInfo, handleCashPayment, handleVisaPayment } =
    useCheckOut();
  const { cartId } = useParams();

  const BtnIsDisabled =
    userInfo.city == "" || userInfo.details == "" || userInfo.phone == ""
      ? true
      : false;

  return (
    <>
      <ToastComponent />
      <MainNavBar />
      <div className="container mx-auto p-4">
        <form
          className="w-3/4 mx-auto"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <h3 className="text-xl font-medium">Enter Your Address :</h3>
          </div>
          <div className="my-8">
            <div className="my-3">
              <label className="block mb-2 text-md  text-gray-900">
                Details :
              </label>
              <input
                value={userInfo.details}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, details: e.target.value });
                }}
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <div className="my-3">
              <label className="block mb-2 text-md  text-gray-900">
                Phone :
              </label>
              <input
                value={userInfo.phone}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, phone: e.target.value });
                }}
                required
                type="tel"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div className="my-3">
              <label className="block mb-2 text-md  text-gray-900">
                City :
              </label>
              <input
                value={userInfo.city}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, city: e.target.value });
                }}
                required
                type="text"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div>
              <button
                onClick={() => {
                  handleCashPayment(cartId);
                  setUserInfo({ details: "", city: "", phone: "" });
                }}
                disabled={BtnIsDisabled}
                className={
                  BtnIsDisabled
                    ? " mt-4 rounded-lg text-md px-8 py-2.5 me-2 mb-2 focus:outline-none text-white bg-gray-400"
                    : "cursor-pointer mt-3 text-white bg-main-color focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-8 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] "
                }
              >
                Cash
              </button>
              <button
                onClick={() => {
                  handleVisaPayment(cartId);
                  setUserInfo({ details: "", city: "", phone: "" });
                }}
                disabled={BtnIsDisabled}
                className={
                  BtnIsDisabled
                    ? " mt-4 rounded-lg text-md px-8 py-2.5 me-2 mb-2 focus:outline-none text-white bg-gray-400"
                    : "cursor-pointer mt-3 text-white bg-main-color focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-8 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] "
                }
              >
                Visa
              </button>
            </div>
          </div>
        </form>
      </div>
      <FooterComponent />
    </>
  );
}
