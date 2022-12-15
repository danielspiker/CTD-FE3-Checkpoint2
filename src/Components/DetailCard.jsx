import { useEffect, useState } from 'react'
import ScheduleFormModal from './ScheduleFormModal'
import styles from './DetailCard.module.css'
import { useParams } from 'react-router-dom'
import { useTheme } from '../Hooks/useTheme'

const DetailCard = props => {
  const { theme } = useTheme()

  const [dentista, setDentista] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`)
      .then(response => response.json())
      .then(dentista => setDentista(dentista))
  }, [])
  return (
    <>
      {dentista.nome !== undefined ? (
        <>
          <h1>Detalhes sobre Dr. {dentista.nome} </h1>
          <section className="card col-sm-12 col-lg-6 container">
            <div className={`card-body row ${theme}`}>
              <div className="col-sm-12 col-lg-6">
                <img
                  className="card-img-top"
                  src="/images/doctor.jpg"
                  alt="doctor placeholder"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nome: {dentista.nome}</li>
                  <li className="list-group-item">
                    Sobrenome: {dentista.sobrenome}
                  </li>
                  <li className="list-group-item">
                    Usuário: {dentista.usuario.username}
                  </li>
                </ul>
                <div className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`btn btn-light ${styles.button}`}
                  >
                    Marcar consulta
                  </button>
                </div>
              </div>
            </div>
          </section>
          <ScheduleFormModal />
        </>
      ) : null}
    </>
  )
}

export default DetailCard
