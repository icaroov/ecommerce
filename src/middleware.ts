import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

import { createCart } from './app/actions/createCart'
import { getCartById } from './app/actions/getCartById'
import { CartType } from './types'

const COOKIE = 'cartId'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next()

  const cartData = request.cookies.get(COOKIE)

  let cart: CartType | null = null

  if (!cartData) {
    const sessionId = new Date().getTime().toString()

    cart = await createCart(sessionId)
  } else {
    cart = await getCartById(cartData.value)
  }

  response.cookies.set(COOKIE, cart.id)

  return response
}
