import React from 'react'
import SearchBar from './SearchBar'
import '../stylesheets/Nav.css'
import clima from '../resourses/clima.png'

function Nav() {
  return (
    <div className='contenedor-nav'>
      <div className="contenedor-interno-nav">
        <div className="contenedor-info-nav">
          <img src={clima} alt="Imagen de clima" />
          <h2>Weather App</h2>
        </div>
        <div className="contenedor-searchbar">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Nav