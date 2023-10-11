"use client"
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'


export default function NavbarRoutes() {
  const pathname = usePathname();
  
  const isTeacherPage = pathname?.startsWith("/Teacher");
  const isPlayerPage = pathname?.includes("/Chapter"); 
  

  return (
    <div className='flex gap-x-2 ml-auto '>
      {
        isTeacherPage || isPlayerPage ? (
          <Link href="/">
             <Button  size="sm" variant="ghost">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
          </Link>
         
        ) : (
          <Link href="/Teacher/Courses">
            <Button size="sm" variant="ghost">
                Teacher mode
            </Button>
          </Link>
        )
      }
      <UserButton afterSignOutUrl="/" /> 
    </div>
  )
}
