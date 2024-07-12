interface AnnouncementBarProps {
  message: string
}

export const AnnouncementBar = ({ message }: AnnouncementBarProps) => {
  return (
    <div className='bg-black text-white text-center p-2'>
      <p>{message}</p>
    </div>
  )
}
