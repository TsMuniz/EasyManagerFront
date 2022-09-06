import React from 'react'

export default function AdminPainelTemplate({children}) {
  return (
    <div 
    className='
        h-screen
        w-full
        flex flex-col items-center
        bg-gray-100
    '
    >{children}</div>
  )
}
