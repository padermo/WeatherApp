import React from 'react'
import SearchBar from './SearchBar'
import '../stylesheets/Nav.css'
import clima from '../resourses/clima.png'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='contenedor-nav'>
      <div className="contenedor-interno-nav">
        <div className="contenedor-info-nav">
          <img src={clima} alt="Imagen de clima" />
          <h2>Weather App</h2>
        </div>
        <Link to="/" className='link-home'>
          <h2>Home</h2>
        </Link>
        <div className="contenedor-searchbar">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Nav