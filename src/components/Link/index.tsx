import { Link as ReactLink } from 'react-router-dom'
import React, { useContext, useMemo } from 'react'
import RouteContext from '../../context/index'
import { Route } from '../../types/route'

interface Prop {
  to: string | { name: string; params?: Object }
  children: JSX.Element | JSX.Element[] | string
}

function Link({ to, children }: Prop) {
  const { routes } = useContext<{ routes: Route[] }>(RouteContext)

  const convertTo = useMemo<string>(() => {
    if (typeof to === 'string') {
      return to
    }

    const route = to?.name

    const item = routes?.find((item) => item.name === route)
    if (!item) throw new Error('route name not valid')

    return item.path
  }, [to])

  return <ReactLink to={convertTo}>{children}</ReactLink>
}

export default Link
