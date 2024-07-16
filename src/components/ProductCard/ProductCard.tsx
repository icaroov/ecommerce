import Image from 'next/image'
import Link from 'next/link'

import { ProductType } from '@/types'
import { formatPrice } from '@/utils/formatPrice'
import { AddToCartButton } from '@/components/AddToCartButton'
import { addItemToCart } from '@/app/actions/addItemToCart'
import { cookies } from 'next/headers'

interface ProductCardProps {
  product: ProductType
}

export const ProductCard = async ({ product }: ProductCardProps) => {
  const formattedPrice = formatPrice(product.price)
  const cartId = cookies().get('cartId')?.value || ''

  return (
    <div className='max-w-sm bg-white flex flex-col items-center justify-between'>
      <div className='overflow-hidden'>
        <Link href='#' prefetch={false}>
          <Image
            className='w-full h-[480px] object-cover hover:scale-125 transition duration-500 cursor-pointer'
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            title={product.name}
          />
        </Link>
      </div>

      <div className='p-5 flex flex-col gap-3 items-center justify-center'>
        <Link href='#'>
          <h5 className='mb-2 text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest'>
            {product.name}
          </h5>
        </Link>

        <p className='font-normal text-gray-700 text-sm truncate max-w-[300px]'>{product.description}</p>
        <span className='font-semibold text-primary'>{formattedPrice}</span>
      </div>

      <AddToCartButton productId={product.id} onAddItemToCart={addItemToCart} cartId={cartId} />
    </div>
  )
}
