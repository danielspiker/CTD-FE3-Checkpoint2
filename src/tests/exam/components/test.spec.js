import { render, screen } from '../../test-utils'
import Login from '../../../Routes/Login'
import Home from '../../../Routes/Home'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import ScheduleForm from '../../../Components/ScheduleForm'

test('Deve renderizar componente Login', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument()
})

test('Deve renderizar componente Home', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})

test('Deve renderizar Navbar', () => {
  render(<Navbar />)
  expect(screen.getByText('DH Odonto')).toBeInTheDocument()
})

test('Deve renderizar Footer', () => {
  render(<Footer />)
  expect(screen.getByAltText('DH-logo')).toBeInTheDocument()
})

test('Deve renderizar Formulario de Agendamento', () => {
  render(<ScheduleForm />)
  expect(screen.getByLabelText('Dentist')).toBeInTheDocument()
})
