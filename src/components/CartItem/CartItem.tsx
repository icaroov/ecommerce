import { CartItemType } from '@/types'
import { Button } from '../ui/Button'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
  item: CartItemType
  onRemove: () => void
}

export const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={item.product.imageUrl}
        alt={item.product.name}
        width={80}
        height={80}
        className='rounded-md object-cover'
      />

      <div className='flex-1'>
        <h4 className='text-xs font-bold text-gray-900 uppercase tracking-widest mb-4'>{item.product.name}</h4>

        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Button variant='outline' size='icon' onClick={() => {}}>
            <MinusIcon className='h-4 w-4' />
          </Button>

          <span>{item.quantity}</span>

          <Button variant='outline' size='icon' onClick={() => {}}>
            <PlusIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <Button variant='ghost' size='icon' onClick={onRemove}>
        <Trash2Icon className='h-5 w-5 text-muted-foreground' />
      </Button>
    </div>
  )
}
