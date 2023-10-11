import React from 'react'
import MobileSidebar from './mobile-sidebar'
import NavbarRoutes from '@/components/navbar-routes'

export default function NavBar() {
  return (
    <div className='p-4 bg-white border-b h-full flex items-center shadow-sm  '> 
        <MobileSidebar/> 
        <NavbarRoutes/> 
        
    </div>
  )
}
