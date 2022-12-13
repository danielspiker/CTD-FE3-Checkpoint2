import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../Hooks/useLogin'
import { useTheme } from '../Hooks/useTheme'
import styles from './Form.module.css'

const LoginForm = () => {
  const [authToken, setAuthToken] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { handleSetAuthToken } = useLogin()

  const { theme, changeTheme } = useTheme()

  const navigation = useNavigate('')

  // useEffect(() => {
  //   if (localStorage.getItem(authToken)) {
  //     navigation('home')
  //   }
  // }, [])

  const handleSubmit = e => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
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
            navigation('/home')
          })
        } else {
          alert('senha errada')
        }
      }
    )
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center card container ${theme} ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={e => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
