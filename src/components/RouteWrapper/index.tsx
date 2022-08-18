import React, { useMemo, Suspense } from 'react'
import { Route } from '../../types/route'
import { BrowserRouter, Route as ReactRoute, Routes } from 'react-router-dom'
import { RouteContextProvider } from '../../context/index'

interface Prop {
  routes: Route[]
  type?: 'browser'
  notFound?: JSX.Element | JSX.Element[]
}

function RouteWrapper({ routes, type = 'browser', notFound }: Prop) {
  const WrapComponent = useMemo(() => {
    if (type === 'browser') {
      return BrowserRouter
    }
    return BrowserRouter
  }, [type])

  return (
    <RouteContextProvider value={{ routes }}>
      <Suspense fallback={<div>loading</div>}>
        <WrapComponent>
          <Routes>
            {routes?.map((route) => (
              <ReactRoute
                key={route.path}
                index={route?.index}
                path={route.path}
                element={React.createElement(route.component)}
              />
            ))}
            {!!notFound && <ReactRoute path='*' element={notFound} />}
          </Routes>
        </WrapComponent>
      </Suspense>
    </RouteContextProvider>
  )
}

export default RouteWrapper
