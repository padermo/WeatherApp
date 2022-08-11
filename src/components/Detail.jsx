import React from 'react'
import '../stylesheets/Detail.css'

function Detail({name, time}) {
  return (
    <div className='contenedor-detail'>
      <h1>{name}</h1>
      <h3>Zona Horaria: {time}</h3>
    </div>
  )
}

export default Detail