"use client"
import React from 'react'
import {LucideIcon} from "lucide-react"
import { cn } from '@/lib/utils'
import {usePathname,useRouter} from 'next/navigation'


type SidebarItemProps = {
    icon: LucideIcon;
    label:string;
    href: string;

}

export default function SidebarItem({
    icon: Icon,
    label, 
    href,
}: SidebarItemProps){
    const pathname = usePathname(); // check the path name of the current page 
    const router = useRouter(); // goes into the path name if isActive 

    const isActive =
     (pathname ==="/" && href  == "/") || //check if on the root page 
     pathname === href || // check we are on another page like search/
     pathname?.startsWith(`${href}/`); // check if  we might be on a sub sub route 
    
     const onClick = () => {
        router.push(href); 
     }


  return (
    <button
        onClick={onClick}
        type="button"
        className={ cn(
            "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 rounded-r-full hover:bg-slate-300/20 hover:-translate-x-2",
            isActive && "text-sky-700  border-2 rounded-r-full shadow-lg  border-sky-700 bg-sky-200/20 hover:bg-sky-200/20"
        )}
        >
        <div className='flex items-center gap-x-2 py-4'>
            <Icon 
                size={22} 
                className={cn("text-slate-500", isActive && "text-sky-700"
                )}
            /> 
            {label}

        </div>
        
            
        
    </button>
  )
}
