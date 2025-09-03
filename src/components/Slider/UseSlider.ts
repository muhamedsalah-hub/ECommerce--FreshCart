//Other Libraries
import { v4 as uuidv4 } from "uuid";

//Interfaces
import { ISettings } from "../../cors/InterFaces/InterFaces";

export const UseSlider = () => {
  const Homesettings: ISettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  const Categorysettings: ISettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToScroll: 3,
    variableWidth: true,
  };

  const images: { id?: string; src: string }[] = [
    { id: uuidv4(), src: "../../../images/Menified/img1.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img2.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img3.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img4.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img5.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img6.avif" },
    { id: uuidv4(), src: "../../../images/Menified/img7.avif" },
  ];

  return { Homesettings, Categorysettings, images };
};
