import React from 'react'
import SideBarItem from './SideBarItem'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-2 shadow bg-white h-full self-start p-6 w-[220px]'>
       <SideBarItem name="Equipe"/> 
       <SideBarItem name="Produtos"/> 
       <SideBarItem name="Financeiro"/> 
       <SideBarItem name="Relaórios"/> 
       <SideBarItem name="Sair"/>        
    </div>
  )
}
