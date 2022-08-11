import React from 'react'
import Nav from './Nav'
import Cards from './Cards'
import '../stylesheets/App.css'
import {Route} from 'react-router-dom'
//import Detail from './Detail'
import ViewDetail from './ViewDetail'

function App() {


  return (
    <div className='contenedor-app'>
      <Nav />
      <Route exact path="/" render={()=> <Cards />} />
      <Route path="/detail/:lat/:lon" render={({match}) => <ViewDetail match={match} />} />
    </div>
  )
}

export default App