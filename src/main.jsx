import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterPage from './router/RouterPage';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterPage />
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </StrictMode>
)
