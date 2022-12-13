import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const LoginContext = createContext()

export function LoginProvider(props) {
  const loginLocalStorage = localStorage.getItem('authToken')

  const [authToken, setAuthToken] = useState(loginLocalStorage)
  // loginLocalStorage === null ? null : loginLocalStorage

  function deleteToken() {
    // if (tokenReceived !== authToken) {
    //   setAuthToken(tokenReceived)
    //   localStorage.setItem('authToken', tokenReceived)
    // }

    localStorage.removeItem('authToken')
    setAuthToken(localStorage.getItem('authToken'))
  }

  function handleSetAuthToken(token) {
    localStorage.setItem('authToken', token)
    setAuthToken(token)
  }

  return (
    <LoginContext.Provider
      value={{ authToken, handleSetAuthToken, deleteToken }}
    >
      {props.children}
    </LoginContext.Provider>
  )
}

export function useLogin() {
  const context = useContext(LoginContext)
  return context
}
