import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";

//Custom Hook
import { useToast } from "./useToast";

//Redux
import { hideToaster } from "../../Features/Toaster/ToasterSlice";

export const ToastComponent = () => {
  const { toast, dispatch, message } = useToast();

  return (
    <div
      className={toast ? "opacity-100" : "hidden " + " transition duration-700"}
    >
      <div className="fixed bottom-0 max-w-lg left-0 z-50">
        <div
          id="toast-success"
          className="flex items-center w-full max-w-sm p-4 mb-4 bg-gray-800 rounded-lg shadow-sm"
          role="alert"
        >
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="ms-3 text-md font-medium text-white">{message}.</div>
          <button
            onClick={() => {
              dispatch(hideToaster());
            }}
            type="button"
            className="ms-auto cursor-pointer -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
