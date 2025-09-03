import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpinnerComponent() {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 -translate-1/2 z-50">
        <div className="bg-[rgba(0,0,0,0.8)] p-3 rounded-lg">
          <FontAwesomeIcon
            size="4x"
            color="white"
            className="font-bold"
            icon={faSpinner}
            spin
          />
        </div>
      </div>
    </div>
  );
}
