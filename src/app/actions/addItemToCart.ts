'use server'

import { revalidateTag } from 'next/cache'

import { CartType } from '@/types'

export const addItemToCart = async (cartId: string, productId: string) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/cart/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId, productId }),
    })

    if (!response.ok) {
      return { cart: null, error: 'An error occurred while adding the product to the cart.' }
    }

    revalidateTag('get-cart')

    const cart = (await response.json()) as CartType

    return {
      cart,
      error: null,
    }
  } catch (error) {
    return { cart: null, error: 'Unable to add the product to the cart.' }
  }
}
