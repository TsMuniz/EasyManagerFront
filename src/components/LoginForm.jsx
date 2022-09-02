import React from 'react'
import loginImage from '../assets/loginImage.svg'
export default function LoginForm() {
  return (
    <section className='xsm:w-full xsm:h-full bg-slate-50 flex flex-col justify-center items-center gap-10 shadow-md'>
        <img
        className='h-[300px] w-[300px]' 
        src={loginImage} 
        alt="" />
        <form className='flex flex-col gap-10 py-3'>
            <input
              className='shadow h-10 px-2' 
              placeholder='email@email.com'
              type="text" />
            <input 
              className='shadow h-10 px-2' 
              placeholder='*********'
              type="text" />
            <button className='bg-accent h-10 text-white text-base rounded-md'>
                Entre
            </button>
            <button className='bg-accent h-10 text-white text-base rounded-md'>
                Cadastre-se
            </button>
        </form>
    </section>
    
  )
}
