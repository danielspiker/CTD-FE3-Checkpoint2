import { Outlet } from 'react-router-dom'
import { useTheme } from '../Hooks/useTheme'
import Footer from './Footer'
import Navbar from './Navbar'

export function MainLayout() {
  const { theme } = useTheme()

  return (
    <div className={`${theme}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
