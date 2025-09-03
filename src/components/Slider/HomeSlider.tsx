//Other Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// //React Router
// import { useLocation } from "react-router";

//Interfaces
import { ISettings } from "../../cors/InterFaces/InterFaces";

export const HomeSlider = ({
  images,
  settings,
}: {
  images: { id?: string; src: string }[];
  settings: ISettings;
}) => {
  // const location = useLocation();

  return (
    <>
      <Slider {...settings}>
        {images?.map((img) => {
          return (
            <div key={img.id}>
              <img
                width={"1053"}
                height={"220"}
                src={img.src}
                className=" w-full h-[220px]"
                alt={"slider photos"}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
