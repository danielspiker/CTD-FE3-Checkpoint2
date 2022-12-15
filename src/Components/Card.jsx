import { Link } from 'react-router-dom'
import { useTheme } from '../Hooks/useTheme'
import styles from './Card.module.css'

const Card = props => {
  const { theme } = useTheme()
  return (
    <>
      <div className={`card card-${theme}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
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
