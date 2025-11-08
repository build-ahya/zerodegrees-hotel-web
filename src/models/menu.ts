export interface Side {
    name: string;
    price: number;
}

export interface Variant {
  name: string;
  price: number;
  image: string;
}


export default interface Menu {
  id: string;
  name: string;
  image: string;
  status: 'in-stock' | 'out-off-stock';
  type: 'food'|'drink',
  price: number;
  slashedPrice?: number;
  highlighted?: boolean;
  category: string;
  description?: string;
  variants?: Variant[];
  sides?: Side[];
  createdAt?: number;
  updatedAt?: number;
}
