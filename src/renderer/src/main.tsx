import './assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Home from './pages/home/home'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
