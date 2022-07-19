import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    
    <ul>
        <li><Link href="/"> home page </Link></li>
        <li><Link href="/products"> Product </Link></li> 

        
    </ul>
  )
}

  

export default Header