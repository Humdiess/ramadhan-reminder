'use client'

import React, { useEffect, useState } from 'react'

function reminderButton() {
    const [reminder, setReminder] = useState(false)
    
    const handleReminder = () => {
        if (reminder == false) {
            setReminder(true)
        } else {
            setReminder(false)
        }
    }
    
    return (
      <button onClick={() => handleReminder()} className='border     border-red-600 p-4 rounded-md hover:cursor-pointer' >
        {reminder ?

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0   0 24 24" fill="red" stroke="red" strokeWidth="2"    strokeLinecap="round"        strokeLinejoin="round">
              <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          </svg>

          :

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8c1-2 2.5-4 4.5-5.5" />
              <path d="M4 12c0-1 .2-2 .5-3" />
              <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M22 8c-1-2-2.5-4-4.5-5.5" />
              <path d="M20 12c0-1-.2-2-.5-3" />
          </svg>
        }
    </button>
    )
}

export default reminderButton