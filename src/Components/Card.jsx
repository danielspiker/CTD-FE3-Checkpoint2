import { Link } from 'react-router-dom'
import { useTheme } from '../Hooks/useTheme'
import styles from './Card.module.css'

const Card = props => {
  const { theme } = useTheme()
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card card-${theme}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentista/${props.dados.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{props.dados.nome}</h5>
          </Link>
          <p className="card-text">{props.dados.usuario.username}</p>
        </div>
      </div>
    </>
  )
}

export default Card
