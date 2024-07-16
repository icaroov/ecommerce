'use server'

import { cookies } from 'next/headers'

import { CartType } from '@/types'
import { EXPIRATION_TIME } from '@/utils/cartStorage'

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
    const cartId = cart.id

    const expirationDate = new Date(Date.now() + EXPIRATION_TIME)
    cookies().set('cartId', cartId, { expires: expirationDate, path: '/', httpOnly: false })
    cookies().set('sessionId', sessionId, { expires: expirationDate, path: '/', httpOnly: false })

    return cart
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Unable to create the cart.')
  }
}
