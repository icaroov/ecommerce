import { Header } from '@/components/Header'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className='max-w-screen-xl mx-auto'>{children}</main>
    </>
  )
}
