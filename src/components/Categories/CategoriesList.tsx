//Interfaces
import { ICategories } from "../../cors/InterFaces/InterFaces";

export const CategoriesList = ({ category }: { category: ICategories }) => {
  return (
    <>
      <div className="h-3/4">
        <img
          className="h-full object-cover w-full"
          height={"275"}
          width={"440"}
          src={category.categoryImage}
          alt={category.categoryName}
        />
      </div>
      <div className="p-4 text-center mt-5 py-5">
        <h1 className="text-main-color text-5xl">{category.categoryName}</h1>
      </div>
      <div className="text-center"></div>
    </>
  );
};
