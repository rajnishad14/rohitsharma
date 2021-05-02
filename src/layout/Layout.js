import React from 'react'
import { NavBar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
