import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
