'use client'

import { useEffect, useState } from 'react'

interface AnnouncementBarProps {
  message: string
}

export const AnnouncementBar = ({ message }: AnnouncementBarProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <div className='bg-secondary text-white text-center p-2'>
      <p>{message}</p>
    </div>
  )
}
