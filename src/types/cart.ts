import type { ProductInCart } from './product'

export interface CartItem extends ProductInCart {
  id: string | number
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}