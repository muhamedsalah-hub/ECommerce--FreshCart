//Other Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// //React Router
// import { useLocation } from "react-router";

//Interfaces
import { ISettings } from "../../cors/InterFaces/InterFaces";

export const CategorisSlider = ({
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
                src={img.src}
                width={"250"}
                height={"250"}
                className="h-[250px] w-[250px] "
                alt={"categories popular photos"}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
