import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Index/Home'
import Cities from './pages/Index/Cities'
import { CityDetail } from './components/CityDetail/CityDetail'
import store from './store/store.js'
import { Provider } from 'react-redux'

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
      },
      {
        path: 'city/:_id',
        element: <CityDetail />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>        
    <RouterProvider router={router}/>
    </Provider>   
  )
};

export default App;