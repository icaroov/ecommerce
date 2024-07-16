import { ProductType } from './product'

export type CartItemType = {
  id: string
  quantity: number
  product: ProductType
  cartId: string
  productId: string
}

export type CartType = {
  id: string
  total: number
  sessionId: string
  items: CartItemType[]
}
