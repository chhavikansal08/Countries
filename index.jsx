import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './componets/Home'
import Error from './componets/Error'
import CountryDetail from './componets/CountryDetail'
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
            path: '/:country',
            element: <CountryDetail/>,
        }
      ],
    },
  ])
  
  const root = createRoot(document.querySelector('#root'))
  
  root.render(<RouterProvider router={router} />)
