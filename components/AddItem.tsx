'use client'

import React from 'react'

function AddItem() {

    const openAddItem = () => {
        // phone notification
        if(Notification.permission !== 'granted') {
            Notification.requestPermission()
        }

        new Notification('Aplikasi', {
            body: 'Aplikasi berhasil ditambahkan'
        })
    }

  return (
    <div className='bg-white w-96 p-4 h-auto aspect-video rounded-lg flex flex-col justify-center items-center border border-gray-400 border-dashed hover:cursor-pointer' >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
        <p className='text-gray-400'>Tambahkan Aplikasi</p>

        <button className='mt-96' onClick={() => new Notification('Aplikasi', {body: 'Aplikasi berhasil ditambahkan'})}>
            test
        </button>
    </div>
  )
}

export default AddItem