import { ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Sheet } from '@/components/ui/Sheet'

interface ShopCartButtonProps {
  onClick: () => void
  openCart: boolean
  quantity?: number
}

export const ShopCartButton = ({ openCart, quantity = 0, onClick }: ShopCartButtonProps) => {
  return (
    <>
      <Button variant='ghost' className='relative' onClick={onClick} size='icon'>
        <ShoppingCartIcon />

        <span className='sr-only'>Abrir carrinho</span>
        <span className='absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full'>
          {quantity}
        </span>
      </Button>

      <Sheet title='1 Item' description='Seus itens' isOpen={openCart} onClose={onClick}>
        <p>Sheet Content</p>
      </Sheet>
    </>
  )
}
