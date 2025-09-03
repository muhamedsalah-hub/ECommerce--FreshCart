export default function CartModal({
  handleCloseModal,
  handleClearUserCart,
}: {
  handleCloseModal: () => void;
  handleClearUserCart: () => Promise<void>;
}) {
  return (
    <>
      <div
        onClick={handleCloseModal}
        className={
          "fixed min-h-screen bg-[rgba(0,0,0,0.3)] w-full  flex justify-center items-center"
        }
      >
        <div id="popup-modal" className=" justify-center  items-center ">
          <div className="relative p-4 w-full max-w-md ">
            <div className="relative bg-white rounded-lg shadow-sm ">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="popup-modal"
              >
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <h3 className="mb-5 text-lg font-medium ">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleClearUserCart();
                  }}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white cursor-pointer bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={handleCloseModal}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-2.5 px-5 cursor-pointer ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
