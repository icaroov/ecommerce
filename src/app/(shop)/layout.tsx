import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar message='Free shipping on orders over $100' />
      <Header />

      <main className='max-w-screen-xl mx-auto py-12 md:py-20'>{children}</main>

      <Footer />
    </>
  )
}
