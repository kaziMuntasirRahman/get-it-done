import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </StrictMode>,
)
