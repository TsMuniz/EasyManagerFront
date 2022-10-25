import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LogoutButton({name, icon}) {
  const {pathname} = useLocation()
  return (
    <Link 
        to="/"
        className="
        shadow-md 
        h-14   
        flex justify-center items-center  
        rounded
        hover:translate-x-3"         
    >
        <img src={icon} alt="" />
        {name}
    </Link>
  )
}
