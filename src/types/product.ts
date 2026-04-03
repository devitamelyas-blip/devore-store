export interface Product {
  id: string | number
  name: string
  price: number
  image?: string
  category?: string
  stock?: number
}

export interface ProductInCart extends Product {
  quantity: number
}