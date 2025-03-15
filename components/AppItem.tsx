'use client'

import React from 'react'
import ReminderButton from '@/ui/reminderButton'

interface AppItemProps {
  title: string
  url: string
  description: string
}

function AppItem({ title, url, description }: AppItemProps) {
    const openApp = (url: string) => {
        window.open(url)
    }

  return (
    <div className='bg-white w-96 p-4 h-auto aspect-video rounded-lg shadow-md flex flex-col justify-between'>

        <div className="header">
            <h1 className='text-black font-black text-[1.8rem]'>{title}</h1>

            <p>{description}</p>
        </div>

        <div className='flex gap-2 w-full justify-between'>
          <button onClick={() => openApp(url)} className='px-4 py-2 bg-red-600 text-white font-medium rounded-md cursor-pointer w-full'>Buka Aplikasi</button>

          <ReminderButton />
        </div>
    </div>
  )
}

export default AppItem