//Other Libraries
import { v4 as uuidv4 } from "uuid";

export const FooterComponent = () => {
  const images: { id: string; src: string }[] = [
    { id: uuidv4(), src: "../../../images/Menified/amazon-pay.webp" },
    {
      id: uuidv4(),
      src: "../../../images/Menified/American-Express-Color.webp",
    },
    { id: uuidv4(), src: "../../../images/Menified/paypal.webp" },
  ];

  return (
    <>
      <div className="bg-[rgb(240,243,242)] my-5">
        <div className="container px-4 py-12 mx-auto">
          <div>
            <h3 className="text-2xl">Get the FreshCart app</h3>
            <p className="text-gray-500">
              We will send you a link, open it on your phone to download the
              app.
            </p>
          </div>
          <div className="mb-6 flex  justify-between gap-x-5 items-center">
            <input
              type="text"
              placeholder="Email..."
              id="default-input"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
            />
            <button className="w-xs cursor-pointer mt-4 text-white bg-main-color  font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-[#72bd69] ">
              Share App Link
            </button>
          </div>
          <hr className="border-gray-300" />
          <div className="lg:flex justify-between">
            <div className="my-5 flex items-center ">
              <span>Payment Partners</span>
              {images.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="w-15 ms-3 mt-2 flex items-center"
                  >
                    <img
                      width={"60"}
                      height={"35"}
                      src={img.src}
                      className="w-full object-contain"
                      alt="paymen methods"
                    />
                  </div>
                );
              })}
            </div>
            <div className="my-5 flex items-center">
              <span>Get deliveries with FreshCart</span>
              <div className="w-25 ms-3 mt-2  flex items-center">
                <img
                  src="../../../images/Menified/get-apple-store.webp"
                  className="w-full object-contain"
                  alt="Apple store logo"
                  width={"100"}
                  height={"36"}
                />
              </div>
              <div className="w-25 ms-3 mt-2  flex items-center">
                <img
                  src="../../../images/Menified/get-google-play.webp"
                  className="w-full object-contain"
                  width={"100"}
                  height={"36"}
                  alt="google play logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
