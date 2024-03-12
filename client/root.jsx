import { AppRoute, Router } from '/:core.jsx'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootProvider from './providers'

export default function Root({ url, routes, head, ctxHydration, routeMap }) {
  return (
    <Suspense>
      <Router location={url}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <AppRoute
                  head={head}
                  ctxHydration={ctxHydration}
                  ctx={routeMap[path]}
                >
                  <RootProvider>
                    <Component />
                  </RootProvider>
                </AppRoute>
              }
            />
          ))}
        </Routes>
      </Router>
    </Suspense>
  )
}
