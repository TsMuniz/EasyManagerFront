import React from 'react'

export default function Input({placeholder, type , error, inputName}) {
  return (
    <input
     type={type}
     placeholder={placeholder}
     className='shadow-md px-2 h-10 '
    />
  )
}
