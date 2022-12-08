import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'

const Home = () => {
  const [dentistas, setDentistas] = useState([])

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    fetch('https://dhodonto.ctdprojetos.com.br/dentista')
      .then(response => response.json())
      .then(dentista => setDentistas(dentista))
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map(dentista => (
          <Card dados={dentista} key={dentista.matricula} />
        ))}
      </div>
    </>
  )
}

export default Home
