'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { ShoppingCartIcon } from 'lucide-react'

import { CartType } from '@/types'
import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'

interface AddToCartButtonProps {
  productId: string
  cartId: string
  onAddItemToCart: (
    cartId: string,
    productId: string
  ) => Promise<
    | {
        cart: null
        error: string
      }
    | {
        cart: CartType
        error: null
      }
  >
}

export const AddToCartButton = ({ productId, cartId, onAddItemToCart }: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition()

  console.log('AddToCartButton:', { cartId })

  return (
    <Button
      className='gap-2 uppercase w-full'
      size='lg'
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const result = await onAddItemToCart(cartId, productId)

          if (result?.error) {
            toast.error(result.error)
          } else {
            toast.success('Item added to cart')
          }
        })
      }}
    >
      {isPending ? <Loader /> : <ShoppingCartIcon className='w-4 h-4 ml-2' />}
      Add to Cart
    </Button>
  )
}
