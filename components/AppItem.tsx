'use client'

import React from 'react'

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

        <div className='flex gap-2'>
          <button onClick={() => openApp(url)} className='px-4 py-2 bg-red-600 text-white font-medium rounded-md cursor-pointer'>Buka Aplikasi</button>
          <button onClick={() => alert("reminder set")} className='border border-red-600 p-4 rounded-md hover:cursor-pointer'>
            {/* bell icon */}

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="2" stroke-linecap="round"        stroke-linejoin="round">
                <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default AppItem