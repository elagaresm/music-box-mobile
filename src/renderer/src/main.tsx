import './assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Home from './pages/home/home'
import Canciones from './pages/home/canciones'
import Populares from './pages/home/populares'
import Albumes from './pages/home/albumes'
import Artistas from './pages/home/artistas'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />
      },
      {
        path: '/home',
        element: <Home />,
        children: [
          {
            index: true,
            element: <Navigate to={'/home/populares'} />
          },
          {
            path: '/home/populares',
            element: <Populares />
          },
          {
            path: '/home/canciones',
            element: <Canciones />
          },
          {
            path: '/home/artistas',
            element: <Artistas />
          },
          {
            path: '/home/albumes',
            element: <Albumes />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
