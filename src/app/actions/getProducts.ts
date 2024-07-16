'use serve'

import { ProductType } from '@/types'

export const getProducts = async (): Promise<ProductType[]> => {
  const products = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products', {
    method: 'GET',
  })

  return await products.json()
}
