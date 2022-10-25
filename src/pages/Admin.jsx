import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminContent from '../components/AdminContent'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AdminPainelTemplate from '../templates/AdminPainelTemplate'

export default function Admin() {
  return (
    <AdminPainelTemplate>
        <Header name="thiago"/>
        <div className='flex flex-1 items-start w-full'>
         <SideBar/>
            <div className='flex-1 p-6 h-full' >
                <AdminContent>
                    <Outlet/>
                </AdminContent>
            </div> 
        </div>
    </AdminPainelTemplate>
  )
}
