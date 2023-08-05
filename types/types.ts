export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  rating?: number;
  brand: string;
  category: string;
  thumbnail: string;
  discountPercentage?: number;
  stock?: number;
  images?: string[];
}
export interface ProductSelect extends Product {
  quantity: number;
}
export interface ChipData {
  key: number;
  label: string;
}
export type Anchor = "top" | "left" | "bottom" | "right";
export interface Users {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  id: number;
}
