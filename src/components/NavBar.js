import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/follow">
        Follow
      </Link>
      <Link className="link" to="/post">
        Posts
      </Link>
    </nav>
  )
}

export default NavBar
