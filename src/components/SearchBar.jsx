import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getCities } from '../redux/action'
import '../stylesheets/SearchBar.css'


function SearchBar() {
  const dispatch = useDispatch()

  const [input, setInput] = useState([])

  function onChange(e) {
    setInput(e.target.value)
  }

  function onClick() {
    dispatch(getCities(input))
    setInput("")
  }

  return (
    <div className='contenedor-search'>
      <input className='input-search' type="text" onChange={onChange} value={input} />
      <button className='btn-search' onClick={onClick}>Search</button>
    </div>
  )
}

export default SearchBar