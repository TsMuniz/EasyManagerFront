import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assets/loginImage.svg'
import {FaRegEyeSlash} from 'react-icons/fa'
import {FaRegEye} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorMessage from './ErrorMessage'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true)

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  }).required();

  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => console.log(data);

  return (
    <section className='w-full h-full bg-gray-200 flex flex-col  items-center space-y-10 shadow-md'>
        <img
        className='h-[300px] w-[300px]' 
        src={loginImage} 
        alt="" 
        />

        <form 
          className='flex flex-col space-y-10 py-3'
          onSubmit={handleSubmit(onSubmit)}
        >
            <input
              className='shadow h-12 px-2' 
              placeholder='email@email.com'
              {...register('email')}
              type="text" />
              <ErrorMessage error={errors} inputName={'email'}/>
            <div
              className='shadow h-12 bg-white flex px-2'
              >
              <input 
                placeholder='*********'
                {...register('password')}
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
            <ErrorMessage error={errors} inputName={'password'}/>

            <button className='bg-accent h-12 text-white text-base rounded-md'>
                Entre
            </button>

            <Link
              to="/register"                
            >
              <button
                className='bg-accent h-12 w-full text-white text-base text rounded-md'
              >
                Cadastre-se
              </button>
            </Link>
        </form>
    </section>
    
  )
}
