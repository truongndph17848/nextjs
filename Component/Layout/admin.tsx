import React from 'react'
import { LayoutProps } from '../../../models/layout'



const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        <div className='grid grid-clols-[200px,auto]'>
            <div>
                Siderbar
            </div>
            <div>
                {children}
            </div>
            
        </div>
    </div>
  )
}

export default LayoutAdmin