import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebarRoutes'

export default function Sidebar() {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-slate-50 shadow-lg '>
        <div className='px-6 border-b'>
            <Logo/>
        </div>
        <div className='flex flex-col w-full '>
            <SidebarRoutes/> 
        
        </div> 
    
    </div>
  )
}
