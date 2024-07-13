export type TCategory = {
  createdAt: string;
  name: string;
  slug: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type TBrand = {
  createdAt: string;
  name: string;
  slug: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type TProduct = {
  brand: TBrand;
  category: TCategory;
  createdAt: string;
  description: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  stockQuantity: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type TIconMapping = Record<string, JSX.Element>;
