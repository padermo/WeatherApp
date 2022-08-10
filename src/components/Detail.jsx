import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/action'

function Detail({ match }) {
  const state = useSelector(state => state.detalles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(match.params.name))
  }, [dispatch])
  // ! revisar las llamadas del state.detalles
  // ! no se trae la informacion pedida pero si se llena el state con los datos

  console.log(state);
  console.log(state.main);
  return (
    <div className='contenedor-detail'>
      <div className="contenedor-cabecera-detail">
        <h1>{state.name}</h1>
      </div>
      <div className="contenedor-temp-detail">
        <label htmlFor="tempMin">Temp Min</label>
        <h3 id='tempMin'></h3>
        <label htmlFor="tempMax">Temp Max</label>
      </div>
    </div>
  )
}

export default Detail