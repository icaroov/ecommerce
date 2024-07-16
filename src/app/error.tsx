'use client'

import { Button } from '@/components/ui/Button'

type ErrorPageProps = {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className='container flex flex-col items-center justify-center h-full'>
      <h1 className='text-3xl font-bold'>An error occurred...</h1>
      <p className='text-lg text-gray-600 mt-5'>{error.message}</p>

      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

export default ErrorPage
