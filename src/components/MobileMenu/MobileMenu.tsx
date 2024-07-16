import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Sheet } from '@/components/ui/Sheet'

interface MobileMenuProps {
  navigationLinks: { name: string; href: string; current: boolean }[]
  onClose: () => void
  isOpen: boolean
}

export const MobileMenu = ({ isOpen, onClose, navigationLinks }: MobileMenuProps) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <nav>
        <ul className='flex flex-col p-4 gap-3 mt-5'>
          {navigationLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                prefetch={false}
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
  )
}
