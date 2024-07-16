'use server'

import { toast } from 'sonner'

import { CartType } from '@/types'

export const getCartById = async (cartId: string): Promise<CartType> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/cart/' + cartId, {
      method: 'GET',
      next: {
        tags: ['get-cart'],
      },
    })

    if (!response.ok) {
      toast.error('An error occurred while fetching the cart.')
    }

    const { cart } = await response.json()

    return cart
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message)
    }

    throw new Error('Unable to fetch the cart.')
  }
}
