import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='bg-muted w-full'>
      <div className='container p-6 max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-sm'>
        <div className='grid gap-1'>
          <h3 className='font-semibold'>Customer Support</h3>
          <Link href='#' prefetch={false}>
            Account
          </Link>
          <Link href='#' prefetch={false}>
            Contact Us
          </Link>
          <Link href='#' prefetch={false}>
            FAQs
          </Link>
          <Link href='#' prefetch={false}>
            Terms of Service
          </Link>
        </div>
        <div className='grid gap-1'>
          <h3 className='font-semibold'>Shop</h3>
          <Link href='#' prefetch={false}>
            Shop All
          </Link>
          <Link href='#' prefetch={false}>
            Best Sellers
          </Link>
          <Link href='#' prefetch={false}>
            Fragrance
          </Link>
          <Link href='#' prefetch={false}>
            Body Care
          </Link>
        </div>
        <div className='grid gap-1'>
          <h3 className='font-semibold'>About Us</h3>
          <Link href='#' prefetch={false}>
            Blog
          </Link>
          <Link href='#' prefetch={false}>
            Community
          </Link>
          <Link href='#' prefetch={false}>
            Support
          </Link>
          <Link href='#' prefetch={false}>
            FAQs
          </Link>
        </div>
      </div>

      <div className='bg-primary text-white flex items-center justify-center w-full text-xs font-normal p-2'>
        © {new Date().getFullYear()} O Boticário S.A. | All rights reserved
      </div>
    </footer>
  )
}
