'use client'

import { useTransition } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'
import { createCart } from '@/app/actions/createCart'
import { getCartFromStorage, saveCartToStorage } from '@/utils/cartStorage'

interface AddToCartButtonProps {
  productId: string
  onAddItemToCart: (cartId: string, productId: string) => void
}

export const AddToCartButton = ({ productId, onAddItemToCart }: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      className='gap-2 uppercase w-full'
      size='lg'
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          let cartData = getCartFromStorage()

          if (!cartData) {
            const newCart = await createCart(new Date().getTime().toString())
            cartData = { cartId: newCart.id, sessionId: newCart.sessionId }
            saveCartToStorage(cartData.cartId, cartData.sessionId)
          }

          onAddItemToCart(cartData.cartId, productId)
          toast.success('Item added to cart')
        })
      }}
    >
      {isPending ? <Loader /> : <ShoppingCartIcon className='w-4 h-4 ml-2' />}
      Add to Cart
    </Button>
  )
}
