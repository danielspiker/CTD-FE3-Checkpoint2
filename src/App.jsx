// import { Outlet } from 'react-router-dom'

// import Navbar from './Components/Navbar'

import Home from './Routes/Home'
// import Footer from './Components/Footer'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './Components/MainLayout'
import DetailCard from './Components/DetailCard'
import LoginForm from './Components/LoginForm'
import { ThemeProvider } from './Hooks/useTheme'
import { LoginProvider } from './Hooks/useLogin'

function App() {
  // const { theme } = useTheme()

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'dentista/:id',
          element: <DetailCard />
        },
        {
          path: 'login',
          element: <LoginForm />
        }
      ]
    }
  ])

  return (
    <div>
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
      <LoginProvider>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </LoginProvider>
    </div>
  )
}

export default App
