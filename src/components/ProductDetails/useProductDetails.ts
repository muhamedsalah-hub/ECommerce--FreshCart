//React Hooks
import { useState, useEffect } from "react";

//React Router
import { useParams } from "react-router";

//API Request
import { GetSpecificProduct } from "../../cors/services/GetSpecificProduct";

//Interfaces
import { ISettings, ISpecificProduct } from "../../cors/InterFaces/InterFaces";

export const useProductDetails = () => {
  const [specificProduct, setSpecificProduct] = useState<ISpecificProduct>();

  const specificProductSettings: ISettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const { productId } = useParams<{
    productId: string | undefined;
  }>();

  const fetchSpecificProduct = async () => {
    const response = await GetSpecificProduct(productId);
    const product = response.data.data;
    setSpecificProduct({
      productCategory: product.category.name,
      productImages: product.images,
      productDescription: product.description,
      productPrice: product.price,
      productRate: product.ratingsAverage,
      productTitle: product.title,
    });
  };

  useEffect(() => {
    fetchSpecificProduct();
  }, [productId]);

  return { specificProduct, specificProductSettings, productId };
};
