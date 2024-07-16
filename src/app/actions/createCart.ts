'use server'

import { CartType } from '@/types'

export const createCart = async (sessionId: string): Promise<CartType> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
    })

    if (!response.ok) {
      throw new Error('An error occurred while creating the cart.')
    }

    const cart = (await response.json()) as CartType

    return cart
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Unable to create the cart.')
  }
}
