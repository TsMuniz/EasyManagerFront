import React from 'react'

export default function SideBarItem({name, path, icon}) {
  return (
    <div className='hover:shadow-md'>
        <img src={icon} alt="" />
        <a href={path}>{name}</a>
    </div>
  )
}
