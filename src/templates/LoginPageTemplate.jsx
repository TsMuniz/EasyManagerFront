import React from 'react'

export default function LoginPageTemplate({children}) {
  return (
    <div
        className='
            flex
            justify-center
            items-center
            h-screen
            w-full
            bg-gray-200
        '
    >{children}</div>
  )
}
