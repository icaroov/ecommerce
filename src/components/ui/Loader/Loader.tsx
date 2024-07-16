import { cn } from '@/lib/utils'
import { Loader as LucideLoader } from 'lucide-react'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div role='status'>
      <LucideLoader className={cn('w-4 h-4 text-gray-200 animate-spin fill-slate-300', className)} />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
