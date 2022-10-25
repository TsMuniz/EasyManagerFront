import React from 'react'
import LogoutButton from './LogoutButton'
import SideBarItem from './SideBarItem'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-10 shadow-md bg-white h-full self-start p-6 w-[220px]'>
       <SideBarItem name="Equipe" path="admin-painel/equipe"/> 
       <SideBarItem name="Produtos"/> 
       <SideBarItem name="Financeiro"/> 
       <SideBarItem name="Relatórios"/> 
       <LogoutButton name="Sair"/>        
    </div>
  )
}
