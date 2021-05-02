import { Follow, Post, About, Error, LoginLogout } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './layout/Layout'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginLogout />
          </Route>
          <Route path="/about">
            <Layout>
              <About />
            </Layout>
          </Route>
          <Route path="/follow">
            <Layout>
              <Follow />
            </Layout>
          </Route>
          <Route path="/post">
            <Layout>
              <Post />
            </Layout>
          </Route>
          <Route path="*">
            <Layout>
              <Error />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
