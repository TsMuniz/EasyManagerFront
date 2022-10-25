import React from 'react'

export default function RegisterPageTemplate({children}) {
  return (
    <div 
    className='
        h-screen
        w-full
        flex justify-center items-center
        bg-gray-100
    '
    >
      {children}
    </div>
  )
}
