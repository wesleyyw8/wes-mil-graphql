export interface Product {
  description: string;
  image: {
    path: string;
    title: string;
  };
  name: string;
  price: number;
  slug: string;
  _id: string;
}
