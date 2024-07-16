import Image from 'next/image'
import { useTransition } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { CartItemType, CartType } from '@/types'
import { formatPrice } from '@/utils/formatPrice'

interface CartItemProps {
  item: CartItemType
  onDecrease: (cartId: string, productId: string) => Promise<CartType>
  onIncrease: (cartId: string, productId: string) => Promise<CartType>
}

export const CartItem = ({ item, onDecrease, onIncrease }: CartItemProps) => {
  const [isPending, startTransition] = useTransition()

  const formattedPrice = formatPrice(item.product.price)

  const handleDecrease = () => {
    startTransition(async () => {
      await onDecrease(item.cartId, String(item.productId))
    })
  }

  const handleIncrease = () => {
    startTransition(async () => {
      await onIncrease(item.cartId, String(item.productId))
    })
  }

  return (
    <div className='flex items-center gap-4'>
      <Image
        src={item.product.imageUrl}
        alt={item.product.name}
        width={80}
        height={80}
        className='rounded-md object-cover'
      />

      <div className='flex flex-col'>
        <h4 className='text-xs font-bold text-gray-900 uppercase tracking-widest'>{item.product.name}</h4>
        <span className='mb-6 text-sm font-semibold text-primary'>{formattedPrice}</span>

        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Button variant='outline' size='icon' onClick={handleDecrease} disabled={isPending}>
            <MinusIcon className='h-4 w-4' />
          </Button>

          <span>{item.quantity}</span>

          <Button variant='outline' size='icon' onClick={handleIncrease} disabled={isPending}>
            <PlusIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}
