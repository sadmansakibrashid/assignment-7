import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import NotFound from './components/NotFoundPage';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
 {path:'/',
 element: <RootLayout></RootLayout>,
 children:[
  {
    path:'/',
    element:<Homepage></Homepage>

  },
  {
    path:'/timeline',
    element:<Timeline></Timeline>
 },
 {
  path:'/stats',
  element:<Stats></Stats>
 },
],
errorElement:<NotFound></NotFound>
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <RouterProvider router ={router} />
  </StrictMode>,
)
