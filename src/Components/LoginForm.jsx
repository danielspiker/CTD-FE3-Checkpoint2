import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../Hooks/useLogin'
import { useTheme } from '../Hooks/useTheme'
import styles from './Form.module.css'

const LoginForm = () => {
  // const [authToken, setAuthToken] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const { handleSetAuthToken } = useLogin()
  const { theme } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    if (username.length >= 5 && password.length >= 5) {
      setError(false)
    } else {
      setError(true)
    }
  }, [username, password])

  const handleSubmit = e => {
    e.preventDefault()

    const userData = {
      username,
      password
    }

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(userData)
    }

    fetch(`https://dhodonto.ctdprojetos.com.br/auth`, requestConfig).then(
      response => {
        if (response.ok) {
          response.json().then(data => {
            handleSetAuthToken(data.token)
            navigate('/home')
          })
        } else {
          setUsername('')
          setPassword('')
          alert('Verifique suas informações novamente')
        }
      }
    )
  }

  return (
    <>
      <h1>Faça seu Login </h1>
      <div
        className={`text-center card container ${theme} ${styles.card} ${
          error ? 'error' : ''
        }`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              aria-label="login"
              onChange={e => setUsername(e.target.value)}
            />

            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              aria-label="senha"
              onChange={e => setPassword(e.target.value)}
            />
            {error ? (
              <small>
                Preencha Login e Password com pelo menos 5 caracteres
              </small>
            ) : null}
            <button
              className="btn btn-primary"
              type="submit"
              aria-label="submit"
              disabled={error}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
