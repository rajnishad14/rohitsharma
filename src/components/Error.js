import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error">
      <h1>404 Page not found</h1>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </div>
  )
}

export default Error
