import { useContext } from 'react'
import { Route } from '../types/route'
import RouteContext from '../context/index'

export default function useRouteContext() {
  return useContext<{ routes: Route[] }>(RouteContext)
}
