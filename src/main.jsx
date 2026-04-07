
import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { router } from './route/Route.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)