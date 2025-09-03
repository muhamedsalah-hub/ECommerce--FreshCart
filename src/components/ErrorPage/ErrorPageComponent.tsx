//Components
import { FooterComponent } from "../Footer/FooterComponent";
import { Icons } from "../Icons/Icons";
import { MainNavBar } from "../MainNavBar/MainNavBar";

export default function ErrorPageComponent() {
  return (
    <div className="min-h-screen">
      <MainNavBar />
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div
          className="flex flex-col gap-4
        "
        >
          <div>
            <svg className="w-full py-10">
              <use xlinkHref="#icon-error"></use>
            </svg>
          </div>
          <div>
            <h1 className="text-main-color font-medium text-5xl">
              Page Not Found
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FooterComponent />
      </div>
      <Icons />
    </div>
  );
}
