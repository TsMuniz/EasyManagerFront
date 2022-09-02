import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assets/loginImage.svg'
export default function LoginForm() {
  return (
    <section className='xsm:w-full xsm:h-full bg-slate-50 flex flex-col  items-center gap-10 shadow-md'>
        <img
        className='h-[300px] w-[300px]' 
        src={loginImage} 
        alt="" 
        />
        
        <form className='flex flex-col gap-8 py-3'>
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

            <Link
              to="/register"                
            >
              <button
                className='bg-accent h-10 w-full text-white text-base text rounded-md'
              >
                Cadastre-se
              </button>
            </Link>
        </form>
    </section>
    
  )
}
