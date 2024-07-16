'use server'

import { CartType } from '@/types'
import { revalidateTag } from 'next/cache'

type AddItemToCart = {
  cartId: string
  productId: string
}

export const addItemToCart = async ({ cartId, productId }: AddItemToCart): Promise<CartType> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/cart/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId, productId }),
    })

    if (!response.ok) {
      throw new Error('An error occurred while adding the product to the cart.')
    }

    revalidateTag('get-cart')

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Unable to add the product to the cart.')
  }
}
