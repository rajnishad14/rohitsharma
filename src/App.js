import { Follow, Post, About, Error, LoginLogout } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthWrapper from './AuthWrapper'
import PrivateRoute from './PrivateRoute'
import Layout from './layout/Layout'
import './App.css'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact={true} path="/">
            <Layout>
              <About />
            </Layout>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <Layout>
              <About />
            </Layout>
          </PrivateRoute>
          <PrivateRoute path="/follow">
            <Layout>
              <Follow />
            </Layout>
          </PrivateRoute>
          <PrivateRoute path="/post">
            <Layout>
              <Post />
            </Layout>
          </PrivateRoute>
          <Route path="/login">
           
              <LoginLogout />
            
          </Route>
          <Route path="*">
            
              <Error />
           
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  )
}

export default App
