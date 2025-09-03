//Other Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// //React Router
// import { useLocation } from "react-router";

//Interfaces
import { ISettings } from "../../cors/InterFaces/InterFaces";

export const ProductDetailsSlider = ({
  images,
  settings,
}: {
  images: string[];
  settings: ISettings;
}) => {
  return (
    <>
      <Slider {...settings}>
        {images?.map((img) => {
          return (
            <div className="border-gray-100 border">
              <img
                src={img}
                className="h-[400px] object-contain w-full"
                alt="product images"
                width={"300"}
                height={"400"}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
