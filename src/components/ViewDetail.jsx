import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/action'
import Detail from './Detail'
import '../stylesheets/ViewDetail.css'

function ViewDetail({match}) {
  const state = useSelector(state => state.detalles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(match.params.lat, match.params.lon))
  }, [dispatch, match.params.lat, match.params.lon])

  // ! al sacar mas informacion del state hace un crash
  // ! el crash esta al momento que accedemos a los objetos internos que tiene el state

  return (
    <div className='contenedor-viewdetail'>
      <Detail name={state.name} time={state.timezone} />
    </div>
  )
}

export default ViewDetail