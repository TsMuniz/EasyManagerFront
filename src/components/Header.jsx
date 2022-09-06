import React from 'react'

export default function Header({name, avatar}) {
  return (
    <div className='w-full h-[80px] bg-accent drop-shadow-md flex justify-between px-10 '>
        <img src={avatar} alt="imagem da pessoa que esta logada" />
        <h1 className='text-white'>
            {`Bem Vindo(a) ${name}`}
        </h1>

    </div>
  )
}
