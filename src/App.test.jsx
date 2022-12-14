import '@testing-library/jest-dom'
import { getByPlaceholderText, render } from '@testing-library/react'
import Login from './Routes/Login'
import Home from './Routes/Home'
import { LoginProvider, useLogin } from './Hooks/useLogin'
import Detail from './Routes/Detail'
import { ThemeProvider } from './Hooks/useTheme'
import LoginForm from './Components/LoginForm'
import DetailCard from './Components/DetailCard'
import App from './App'

// describe('Componentes DH Odonto', () => {
test('Deveria renderizar tela de Home', () => {
  const { getByText } = render(<Home />)
  // <LoginProvider>
  //   <Home />
  // </LoginProvider>
  expect(getByText('Home')).toBeInTheDocument()
})

test('Deveria renderizar tela de Detail', () => {
  const { getByText } = render(<DetailCard />)
  expect(getByText('sobre')).toBeInTheDocument()
})

test('Deveria renderizar tela de Login', () => {
  const { getByText } = render(
    // <LoginProvider>
    //   <ThemeProvider>
    //     <LoginForm />
    //   </ThemeProvider>
    // </LoginProvider>
    <LoginForm />
  )
  expect(getByText('seu')).toBeInTheDocument()
})

// it('Fluxo Login', () => {
//   const { getByLabelText, getByText } = render(<Login />)
//   const login = getByLabelText('login')
//   const senha = getByLabelText('senha')
//   const submit = getByLabelText('submit')

//   fireEvent.change(login, { target: { value: 'dentistaAdmin' } })
//   fireEvent.change(senha, { target: { value: 'admin123' } })
//   fireEvent.click(submit)

//   setTimeout(() => {
//     expect(getByText('Home')).toBeInTheDocument()
//   }, 2000)
// })
// })
