'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { VariantProps } from 'class-variance-authority'
import * as SheetPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

import { sheetVariants } from '../sheetVariants'
import { SheetOverlay } from './SheetOverlay'

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetPortal = SheetPrimitive.Portal

export const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
)

SheetContent.displayName = SheetPrimitive.Content.displayName
