export type IUser = {
  name: string;
  email: string;
  role: string;
};

export interface IAuthUser {
  message: string;
  user: IUser;
  token: string;
}

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface IRegisterationUserData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export type IBrands = {
  brandId: string;
  brandName: string;
  brandImage: string;
};

export interface IBrandsState {
  brands: IBrands[];
}

export interface ISubCategory {
  subCategoryName: string;
  subCategoryId: string;
}

export type ICategories = {
  categoryName: string;
  categoryId: string;
  categoryImage: string;
};

export interface ICategoriesState {
  categories: ICategories[];
  subCategories: ISubCategory[];
}

export type IProducts = {
  productImage: string;
  productName: string;
  productPrice: number;
  productRate: number;
  productCategory: string;
  productId: string;
};

export interface IProductsState {
  products: IProducts[];
  numberOfPages: number;
}

export interface ISettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  variableWidth?: boolean;
}

export interface ISpecificProduct {
  productImages: string[];
  productTitle: string;
  productCategory: string;
  productDescription: string;
  productRate: number;
  productPrice: number;
}

export type IWishList = {
  productId: string;
  productName: string;
  productCategory: string;
  productImage: string;
  productPrice: number;
};

export interface IWishListState {
  wishLists: IWishList[];
}

export type ICartProducts = {
  productCount: number;
  productPrice: number;
  productId?: string;
  productTitle: string;
  productImage: string;
  productCategory: string;
};

export interface ICart {
  cartProducts: ICartProducts[];
  cartId: string;
  numberOfCartItems: number;
  totalCartPrice: number;
  cartOwner: string;
}

export interface IToaster {
  toast: boolean;
  message: string;
}

export interface IUserInfo {
  details: string;
  phone: string;
  city: string;
}

export interface IUserOrders {
  AllCartProducts: ICartProducts[];
}

export type ICartItems = {
  count: number;
  price: number;
  _id: string;
  product: {
    title: string;
    imageCover: string;
    category: {
      name: string;
    };
  };
};

export interface IAllOrders {
  cartItems: ICartItems[];
  paymentMethodType: string;
  totalOrderPrice: number;
}

export interface IAllUserOrders {
  cartItems: ICartProducts[];
  paymentMethodType: string;
  totalOrderPrice: number;
}

export interface IAllUserOrdersState {
  orderDetails: IAllUserOrders[];
}
