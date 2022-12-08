// import { Outlet } from 'react-router-dom'

import Navbar from './Components/Navbar'

import Home from './Routes/Home'
import Footer from './Components/Footer'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './Components/MainLayout'
import DetailCard from './Components/DetailCard'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'dentista/:id',
          element: <DetailCard />
        }
      ]
    }
  ])

  return (
    <>
      {/* <Navbar />
      <Home />
      <Footer /> */}

      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      {/* <div className={`light`}>
        <Navbar />
        <main>
          <Home />
          <Outlet />
        </main>
        <Footer />
      </div> */}

      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
