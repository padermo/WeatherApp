import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import '../stylesheets/Cards.css'

function Cards() {
  const state = useSelector(state => state.ciudades);

  return (
    <div className='contenedor-cards'>
      {
        state.map(ciudad => (
          <div key={ciudad.id}>
            <Card name={ciudad.name} min={ciudad.main.temp_min} max={ciudad.main.temp_max} id={ciudad.id} lon={ciudad.coord.lon} lat={ciudad.coord.lat} />
          </div>
        ))
      }
    </div>
  )
}

export default Cards