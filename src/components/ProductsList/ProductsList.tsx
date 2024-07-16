import { ProductType } from '@/types'
import { ProductCard } from '../ProductCard'

interface ProductsListProps {
  products: ProductType[]
}

export const ProductsList = async ({ products }: ProductsListProps) => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-6'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
