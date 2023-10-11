import React from 'react'
import Image from 'next/image'


export default function Logo() {
  return (
    <Image height={80} 
           width={130} 
           alt='logo'
           src='public/logo.svg' />

    
  )
}
