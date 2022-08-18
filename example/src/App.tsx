import React, { lazy } from 'react'

import { RouteWrapper, Route } from 'react-router-wrapper'
import 'react-router-wrapper/dist/index.css'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Detail = lazy(() => import('./pages/Detail'))

const routes: Route[] = [
  { path: '/', component: Home, index: true, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/detail/:id', component: Detail, name: 'detail' }
]

const App = () => {
  return (
    <div>
      <RouteWrapper notFound={<div>not found</div>} routes={routes} />
    </div>
  )
}

export default App
