import { Product } from './product';

export interface Category {
  _id: string;
  slug: string;
  name: string;
  products: {
    total: number;
  };
}
