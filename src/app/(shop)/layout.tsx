import { cookies } from 'next/headers'
import { Toaster } from 'sonner'

import { CartType } from '@/types'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/Footer'
import { createCart } from '@/app/actions/createCart'
import { getCartById } from '@/app/actions/getCartById'
import { addItemToCart } from '@/app/actions/addItemToCart'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { removeItemFromCart } from '@/app/actions/removeItemFromCart'

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()

  const cartData = cookieStore.get('cartId')

  let cart: CartType | null = null

  if (!cartData) {
    cart = await createCart(new Date().getTime().toString())
  } else {
    cart = await getCartById(cartData.value)
  }

  return (
    <>
      <Toaster />
      <AnnouncementBar message='Free shipping on orders over $100' />
      <Header cart={cart} onRemoveItemFromCart={removeItemFromCart} onAddItemToCart={addItemToCart} />

      <main className='max-w-screen-xl mx-auto py-12 md:py-20'>{children}</main>

      <Footer />
    </>
  )
}
