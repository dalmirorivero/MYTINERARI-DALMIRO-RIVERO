import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Index/Home'
import Cities from './pages/Index/Cities'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children: [
      { path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      }
    ]
  }
])

function App() {
  return (        
    <RouterProvider router={router}/>   
  )
};

export default App;