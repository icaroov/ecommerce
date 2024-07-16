'use client'

import { useState } from 'react'
import { ShoppingCartIcon } from 'lucide-react'

import { CartType } from '@/types'
import { Sheet } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { CartItem } from '@/components/CartItem'
import { formatPrice } from '@/utils/formatPrice'

interface ShopCartButtonProps {
  cart: CartType
  onRemoveItemFromCart: (cartId: string, productId: string) => Promise<CartType>
  onAddItemToCart: (cartId: string, productId: string) => Promise<CartType>
}

export const ShopCartButton = ({ cart, onRemoveItemFromCart, onAddItemToCart }: ShopCartButtonProps) => {
  const [openCart, setOpenCart] = useState(false)

  const quantity = cart.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

  const formattedTotal = formatPrice(cart.total || 0)

  return (
    <>
      <Button variant='ghost' className='relative' onClick={() => setOpenCart((prev) => !prev)} size='icon'>
        <ShoppingCartIcon />

        <span className='sr-only'>Open cart</span>
        <span className='absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full'>
          {quantity}
        </span>
      </Button>

      <Sheet
        isOpen={openCart}
        title={`${quantity} ${quantity === 1 ? 'item' : 'items'}`}
        onClose={() => setOpenCart((prev) => !prev)}
      >
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-start justify-center gap-4 mt-4'>
            {cart.items?.length ? (
              cart.items.map((item) => (
                <CartItem key={item.id} item={item} onDecrease={onRemoveItemFromCart} onIncrease={onAddItemToCart} />
              ))
            ) : (
              <p>No items</p>
            )}
          </div>

          <div className='border-t pt-4 w-full'>
            <div className='flex items-center justify-between'>
              <span className='font-medium'>Total</span>
              <span className='font-medium'>{formattedTotal}</span>
            </div>

            <Button className='mt-4 w-full'>Checkout</Button>
          </div>
        </div>
      </Sheet>
    </>
  )
}
