'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
} from '@/components/ui/Sheet/fragments'

const SheetRoot = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

interface MainSheetProps {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
  title?: string
  description?: string
}

const Sheet = ({ children, title = '', description = '', isOpen, onClose }: MainSheetProps) => {
  if (!isOpen) {
    onClose()
  }

  return (
    <SheetRoot open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose />
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  )
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
