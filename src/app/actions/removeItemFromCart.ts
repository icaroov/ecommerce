'use server'

import { revalidateTag } from 'next/cache'

import { CartType } from '@/types'

export const removeItemFromCart = async (cartId: string, productId: string): Promise<CartType> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/cart/items', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId, productId: String(productId) }),
    })

    if (!response.ok) {
      throw new Error('An error occurred while removing the product to the cart.')
    }

    revalidateTag('get-cart')

    return await response.json()
  } catch (error) {
    throw new Error('Unable to remove the product to the cart.')
  }
}
