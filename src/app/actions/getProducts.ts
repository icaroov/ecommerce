'use server'

import { ProductType } from '@/types'

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products', {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('An error occurred while fetching the products.')
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Unable to fetch the products.')
  }
}
