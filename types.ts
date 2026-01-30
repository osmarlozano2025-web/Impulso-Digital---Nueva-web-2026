
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  img: string;
  tag?: 'NUEVO' | 'HOT';
  spec?: string;
}

export interface Brand {
  name: string;
  icon: string;
}
