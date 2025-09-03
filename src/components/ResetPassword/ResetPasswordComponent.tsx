//Components
import { AuthNavBar } from "../AuthNavBar/AuthNavBar";
import { FooterComponent } from "../Footer/FooterComponent";
import { ResetPasswordModal } from "./ResetPasswordModal";

//API Request
import { ResetPassword } from "../../cors/services/ResetPassword";

//React Hooks
import { useState } from "react";

export default function ResetPasswordComponent() {
  const [email, setEmail] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const handleSubmitBtn = async () => {
    try {
      await ResetPassword(email);
      handleOpenModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <ResetPasswordModal modal={modal} handleCloseModal={handleCloseModal} />
      <AuthNavBar />
      <div className="flex flex-col justify-evenly min-h-screen">
        <div className="container mx-auto p-4">
          <div className="mt-10">
            <h1 className="font-medium text-4xl">
              Please insert your email for verification
            </h1>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email..."
              type="email"
              id="email-input"
              className="mt-7 w-full p-4 border border-gray-300 rounded-lg focus:border-red-500  "
            />
            <button
              onClick={handleSubmitBtn}
              type="button"
              className="mt-5 cursor-pointer text-white bg-main-color font-medium rounded-lg text-md px-6 py-3 me-2 mb-2  hover:bg-[#57a259]"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="mt-10">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
