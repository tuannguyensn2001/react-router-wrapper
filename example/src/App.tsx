import React, { lazy } from 'react'

import { RouteWrapper } from 'react-router-wrapper'
import 'react-router-wrapper/dist/index.css'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

const routes = [
  { path: '/', component: Home, index: true },
  { path: '/login', component: Login }
]

const App = () => {
  return (
    <div>
      <RouteWrapper routes={routes} />
    </div>
  )
}

export default App
