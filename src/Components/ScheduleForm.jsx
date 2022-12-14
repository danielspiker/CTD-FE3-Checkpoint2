import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../Hooks/useLogin'
import { useTheme } from '../Hooks/useTheme'
import styles from './ScheduleForm.module.css'

const ScheduleForm = () => {
  const [dentistas, setDentistas] = useState([])
  const [pacientes, setPacientes] = useState([])
  const [dentista, setDentista] = useState('')
  const [paciente, setPaciente] = useState('')
  const [horario, setHorario] = useState('')

  const { authToken, setAuthToken } = useLogin()

  const navigate = useNavigate()

  const { theme } = useTheme()

  useEffect(() => {
    fetch('https://dhodonto.ctdprojetos.com.br/dentista')
      .then(response => response.json())
      .then(dentista => setDentistas(dentista))

    fetch('https://dhodonto.ctdprojetos.com.br/paciente')
      .then(response => response.json())
      .then(paciente => setPacientes(paciente.body))
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }

    const requestBody = JSON.stringify({
      paciente: {
        matricula: paciente
      },
      dentista: {
        matricula: dentista
      },
      dataHoraAgendamento: horario
    })

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody
    }

    fetch(`https://dhodonto.ctdprojetos.com.br/consulta`, requestConfig).then(
      response => {
        if (response.ok) {
          alert('Consulta agendada com sucesso')
          navigate('/home')
        } else {
          alert('Ocorreu um erro')
        }
      }
    )
  }

  return (
    <>
      <div className={`text-center container ${theme}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                onChange={e => setDentista(e.target.value)}
              >
                {dentistas.map(dentista => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {dentista.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                onChange={e => setPaciente(e.target.value)}
              >
                {pacientes.map(paciente => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {paciente.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={e => setHorario(e.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={`btn btn-light ${styles.button}`}
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ScheduleForm
