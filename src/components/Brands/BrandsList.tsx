//InterFaces
import { IBrands } from "../../cors/InterFaces/InterFaces";

export const BrandsList = ({ brand }: { brand: IBrands }) => {
  return (
    <>
      <div className="h-3/4">
        <img
          className="h-full object-cover w-full"
          src={brand.brandImage}
          alt=""
        />
      </div>
      <div className="p-4 text-center mt-5 py-5">
        <h1 className="text-main-color text-5xl">{brand.brandName}</h1>
      </div>
      <div className="text-center"></div>
    </>
  );
};
