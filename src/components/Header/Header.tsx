'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu as MenuIcon } from 'lucide-react'

import { ShopCartButton } from '../ShopCartButton'
import { Button } from '../ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Sheet } from '../ui/Sheet'

const navigationLinks = [
  {
    name: 'Início',
    href: '/',
    current: true,
  },
  {
    name: 'Sobre',
    href: '#',
    current: false,
  },
  {
    name: 'Contato',
    href: '#',
    current: false,
  },
]

export const Header = () => {
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='bg-primary text-white fixed w-full z-20 top-0 start-0 shadow-md'>
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/'>
          <Image
            src='https://cdn.shopify.com/s/files/1/0587/6075/7446/files/Brand-logo-new_1.webp'
            alt='O Boticário'
            width={125}
            height={16}
          />
        </Link>

        <div className='flex md:order-2 space-x-3'>
          <ShopCartButton onClick={() => setOpenCart((prev) => !prev)} openCart={openCart} />

          <Button variant='ghost' className='md:hidden' onClick={() => setOpenMenu(true)}>
            <span className='sr-only'>Abrir menu</span>
            <MenuIcon />
          </Button>
        </div>

        <nav className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn('text-white hover:underline px-2 py-1', item.current ? 'underline font-semibold' : '')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet isOpen={openMenu} onClose={() => setOpenMenu(false)}>
          <nav>
            <ul className='flex flex-col p-4 gap-3 mt-5'>
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-black bg-transparen hover:underline px-2 py-1',
                      item.current ? 'underline font-semibold' : ''
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Sheet>
      </section>
    </header>
  )
}
