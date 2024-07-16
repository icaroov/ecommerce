import { ProductsList } from '@/components/ProductsList'
import { getProducts } from '@/app/actions/getProducts'

export default async function HomePage() {
  const products = await getProducts()

  return <ProductsList products={products} />
}
