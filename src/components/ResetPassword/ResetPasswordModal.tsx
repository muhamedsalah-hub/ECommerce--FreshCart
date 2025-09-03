//React Hooks
import { useState } from "react";

//API Request
import { VerifyCode } from "../../cors/services/VerifyCode";

//React Redux
import { useNavigate } from "react-router";

export const ResetPasswordModal = ({
  modal,
  handleCloseModal,
}: {
  modal: boolean;
  handleCloseModal: () => void;
}) => {
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();

  const handleCodeVerification = async () => {
    try {
      const response = await VerifyCode(code);
      console.log(response);
      handleCloseModal();
      navigate("/Login/UpdatePassword");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        onClick={handleCloseModal}
        className={
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" +
          (modal ? "" : " hidden")
        }
      >
        <div className="absolute bg-[rgba(0,0,0,0.3)] h-full w-full flex justify-center items-center ">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" min-w-1/4  border rounded-2xl border-gray-300"
          >
            <div className="p-5 relative bg-white rounded-lg shadow-s">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t min-w-full min-h-full  border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 ">
                  Reset your Password :
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <div className="my-4">
                  <input
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    type="tel"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block h-15 w-full p-3 "
                    placeholder="Enter Your Verification Code sent to your email..."
                    required
                  />
                </div>
              </div>
              <div className="px-5 flex justify-end">
                <button
                  onClick={handleCodeVerification}
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-3 me-2 mb-2 "
                >
                  Verify
                </button>
                <button
                  onClick={handleCloseModal}
                  className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-6 py-3 me-2 mb-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
