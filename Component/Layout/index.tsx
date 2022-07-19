import React, { Children } from 'react'
import { LayoutProps } from '../../models/layout'

import Header from '../Header'


type Props = {}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
    <Header />
    {children}
    </div>
  )
}

export default Layout