import React from 'react'
import { Navbar, Sidebar } from './Index'

const Layout = () => {
  return (
    <div className=''>
        <Sidebar/>
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Layout
