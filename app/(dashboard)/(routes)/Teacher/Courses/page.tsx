import React from 'react'
import Link from  'next/link'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='p-6'>
        <Link href="/Teacher/Create">
            <Button>
                Create Course
            </Button>
        </Link>
    </div>
  )
}
