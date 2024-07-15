import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Header } from '@/components/Header'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar message='Frete grátis para compras acima de R$ 100,00' />
      <Header className='top-10' />

      <main className='max-w-screen-xl mx-auto'>{children}</main>
    </>
  )
}
