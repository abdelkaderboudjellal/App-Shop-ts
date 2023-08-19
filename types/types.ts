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
  seller?: string;
  available?: boolean;
}
export interface ProductSelect extends Product {
  quantity: number;
}
export interface ProductValid extends ProductSelect {
  valid?: boolean;
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
  phone?: number;
  company?: string;
  location?: string;
}
