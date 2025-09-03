//Components
import { AuthNavBar } from "../AuthNavBar/AuthNavBar";
import { FooterComponent } from "../Footer/FooterComponent";
import { ToastComponent } from "../Toaster/ToastComponent";

//React Redux
import { useRegisterData } from "./UseRegisterData";

export default function RegisterComponent() {
  const { RegisterationUserData, setRegisterationUserData, handleRegisterBtn } =
    useRegisterData();

  const BtnIsDisabled =
    RegisterationUserData.email == "" ||
    RegisterationUserData.password == "" ||
    RegisterationUserData.name == "" ||
    RegisterationUserData.phone == "" ||
    RegisterationUserData.rePassword == ""
      ? true
      : false;

  return (
    <>
      <ToastComponent />
      <AuthNavBar />
      <div className="max-h-screen mt-10">
        <form
          className="w-3/4 mx-auto"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <h3 className="text-xl font-medium">Register Now :</h3>
          </div>
          <div className="my-8">
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Name :
              </label>
              <input
                required
                value={RegisterationUserData.name}
                onChange={(e) => {
                  setRegisterationUserData({
                    ...RegisterationUserData,
                    name: e.target.value,
                  });
                }}
                type="text"
                id="name-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Email :
              </label>
              <input
                required
                value={RegisterationUserData.email}
                onChange={(e) => {
                  setRegisterationUserData({
                    ...RegisterationUserData,
                    email: e.target.value,
                  });
                }}
                type="email"
                id="email-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Password :
              </label>
              <input
                required
                value={RegisterationUserData.password}
                onChange={(e) => {
                  setRegisterationUserData({
                    ...RegisterationUserData,
                    password: e.target.value,
                  });
                }}
                type="password"
                id="password-input"
                autoComplete="off"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Re-Password :
              </label>
              <input
                required
                value={RegisterationUserData.rePassword}
                onChange={(e) => {
                  setRegisterationUserData({
                    ...RegisterationUserData,
                    rePassword: e.target.value,
                  });
                }}
                type="password"
                id="rePassword-input"
                autoComplete="off"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div>
              <label className="block mb-2 text-md  text-gray-900">
                Phone :
              </label>
              <input
                required
                value={RegisterationUserData.phone}
                onChange={(e) => {
                  setRegisterationUserData({
                    ...RegisterationUserData,
                    phone: e.target.value,
                  });
                }}
                type="tel"
                id="phone-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            <div className="text-end">
              <button
                disabled={BtnIsDisabled}
                onClick={handleRegisterBtn}
                className={
                  BtnIsDisabled
                    ? "mt-4 rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none text-white bg-gray-400"
                    : "cursor-pointer mt-3 text-white bg-main-color focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] "
                }
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <FooterComponent />
      </div>
    </>
  );
}
