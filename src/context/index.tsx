import { Route } from '../types/route'
import React from 'react'

const RouteContext = React.createContext<{ routes: Route[] }>({ routes: [] })

const RouteContextProvider = RouteContext.Provider

export { RouteContextProvider }

export default RouteContext
