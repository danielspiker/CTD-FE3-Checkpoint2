import Home from './Routes/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './Components/MainLayout'
import DetailCard from './Components/DetailCard'
import LoginForm from './Components/LoginForm'
import { ThemeProvider } from './Hooks/useTheme'
import { LoginProvider } from './Hooks/useLogin'
import './index.css'

function App() {
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
      <LoginProvider>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </LoginProvider>
    </div>
  )
}

export default App
