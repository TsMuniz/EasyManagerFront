import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assets/loginImage.svg'
import {FaRegEyeSlash} from 'react-icons/fa'
import {FaRegEye} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true)

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section className='xsm:w-full xsm:h-full bg-slate-50 flex flex-col  items-center gap-10 shadow-md'>
        <img
        className='h-[300px] w-[300px]' 
        src={loginImage} 
        alt="" 
        />

        <form 
          className='flex flex-col gap-8 py-3'
          onSubmit={handleSubmit(onSubmit)}
        >
            <input
              className='shadow h-10 px-2' 
              placeholder='email@email.com'
              {...register, 'email'}
              type="text" />
            <div
              className='shadow h-10 flex px-2'>
              <input 
                className='px-2' 
                placeholder='*********'
                {...register, 'password'}
                type={showPassword ? 'password' : 'text'} 
              />
              {!showPassword && <FaRegEyeSlash 
                onClick={() => setShowPassword(!showPassword)}
              
              className='self-center'
              />}
              {showPassword && <FaRegEye 
                onClick={() => setShowPassword(!showPassword)}              
              className='self-center'
              />}
              
            
            </div>
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
