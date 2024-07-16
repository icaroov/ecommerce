import { Suspense } from 'react'
import { Toaster } from 'sonner'
import { cookies } from 'next/headers'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/Footer'
import { getCartById } from '@/app/actions/getCartById'
import { addItemToCart } from '@/app/actions/addItemToCart'
import { removeItemFromCart } from '@/app/actions/removeItemFromCart'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Loader } from '@/components/ui/Loader'

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const cartData = cookies().get('cartId')

  const cart = await getCartById(cartData?.value || '')

  return (
    <>
      <Toaster />
      <AnnouncementBar message='Free shipping on orders over $100' />

      <Suspense fallback={<Loader />}>
        <Header cart={cart} onRemoveItemFromCart={removeItemFromCart} onAddItemToCart={addItemToCart} />

        <main className='max-w-screen-xl mx-auto py-12 md:py-20'>{children}</main>
      </Suspense>

      <Footer />
    </>
  )
}
