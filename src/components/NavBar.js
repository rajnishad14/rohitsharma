import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const isUser = isAuthenticated && user
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
      {isUser ? (
        <button
          style={{ height: '2rem', width: '4rem', backgroundColor: 'white' }}
          onClick={() => {
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout
        </button>
      ) : (
        <button
          style={{ height: '2rem', width: '4rem', backgroundColor: 'white' }}
          onClick={loginWithRedirect}
        >
          Login
        </button>
      )}
    </nav>
  )
}

export default NavBar
