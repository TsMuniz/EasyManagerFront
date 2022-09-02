import React from 'react'
import Input from './Input'

export default function RegisterForm() {
  return (
    <section className='h-full flex flex-col py-4 px-2 shadow-md rounded gap-10'>
        <h1
            className='space-y-4 text-accent text-start text-lg'
        >
            Insira seus dados para se cadastrar no App
        </h1>

        <form className='flex flex-col gap-5  '>
            <Input 
            placeholder='Nome'
            type="text" 
            />
            <Input 
            placeholder='Email'
            type="text" 
            />
            <Input 
            placeholder='Cargo'
            type="text" 
            />
            <Input 
            placeholder='Matricula'
            type="text" 
            />
            <Input 
            placeholder='Senha'
            type="text" 
            />

            <button
                className='bg-accent h-10 w-full text-white text-base text rounded-md'
            >
                Enviar
            </button>
        </form>
    </section>
  )
}
