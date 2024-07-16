'use client'

import { useState, useTransition } from 'react'
import { ShoppingCartIcon } from 'lucide-react'

import { CartType, ProductType } from '@/types'
import { Sheet } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'
import { ProductsList } from '@/components/ProductsList'

interface ShopCartButtonProps {
  cart: CartType
}

export const ShopCartButton = ({ cart }: ShopCartButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const [openCart, setOpenCart] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])

  const quantity = cart.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

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
        {isPending && (
          <div className='flex items-center justify-center h-full'>
            <Loader className='fill-black w-12 h-12' />
          </div>
        )}

        <ProductsList products={products} />
      </Sheet>
    </>
  )
}
