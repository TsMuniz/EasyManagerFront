import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SideBarItem({name, icon}) {
  const nameWithoutSpecialCaracters = name === "Relatórios" ? "Relatorios" : name
  const {pathname} = useLocation()
  const isActive = pathname === `/admin-painel/${nameWithoutSpecialCaracters}` ? "bg-accent text-white" : ""
  return (
    <Link 
      to={`/admin-painel/${nameWithoutSpecialCaracters}`}
      className={
        `shadow-md
        h-14
        flex justify-center items-center
        rounded
        hover:translate-x-3
        transition ease-linear delay-150
        
        ${isActive}`}>
        <img src={icon} alt="" />
        {name}
    </Link>
  )
}
