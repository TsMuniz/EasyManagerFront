import React from 'react'

export default function AdminContent({children}) {
  return (
    <div className='flex grow-1 w-ful h-full shadow bg-white justify-center items-start p-6'>
        {children}
    </div>
  )
}
