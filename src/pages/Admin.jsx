import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AdminPainelTemplate from '../templates/AdminPainelTemplate'

export default function Admin() {
  return (
    <AdminPainelTemplate>
        <Header/>
        <div className='flex flex-1 items-start w-full'>
         <SideBar/> 
        </div>
    </AdminPainelTemplate>
  )
}
