import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
