import React, { useState } from 'react'

const LoginLogout = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const handleLogin = () => {}
  return (
    <>
      <div className="login-logout">
        <div className="login">
          <form onSubmit={(e) => handleLogin(e)}>
            <input
              type="email"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="register">
          <form onSubmit={(e) => handleLogin(e)}>
            <input
              type="email"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              type="password"
              placeholder="Retype Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginLogout
