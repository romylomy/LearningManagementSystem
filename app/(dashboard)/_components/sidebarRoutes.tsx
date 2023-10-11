"use client"
import React from 'react'
import { Layout, Compass, List, BarChart} from 'lucide-react'
import Link from 'next/link'
import SidebarItem from './sidebar-item'
import { usePathname, useRouter } from 'next/navigation'

const questRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href:"/",
    },
    {
        icon: Compass,
        label:"Browse",
        href:"/Search"
    },
]; 

const teacherRoutes = [
    {
        icon: List,
        label: 'Courses',
        href:"/Teacher/Courses",
    },
    {
        icon: BarChart,
        label:"Analytics",
        href:"/Teacher/Analytics"
    },
   
]

export default function SidebarRoutes() {
    const pathname = usePathname(); 
    const route = useRouter();
    
    const isTeacher = pathname?.includes("/Teacher"); 

    const routes = isTeacher ? teacherRoutes : questRoutes
  return (
    <div className='flex flex-col w-full'>
       {
        routes.map((route, index) => (
            <div className='flex flex-col'>
                <SidebarItem
                    key={route.href}
                    href={route.href}
                    icon={route.icon}
                    label={route.label} />
                
            </div> 

        ))
       }
    </div>
  )
}
