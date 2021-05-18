import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import SilosCard from './components/SilosCard'
import 'react-bootstrap/NavbarBrand'
import ultimateSilosList from './api/SilosList'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import DetailPage from '../src/secondPage/DetailPage'

//al posto dei numeri dovrò richiedere i silos, quindi avrò degli oggetti


//per ogni silos dovrò creare una card e passargli i componenti ()
//la lsita di silos ci verrà passata indipendentemente da chi può vederlo
//l'unica preoccupazione è ottenere la lista di oggetti silos e displayarli
const silosCardList = ultimateSilosList.map((silos) => <SilosCard block={silos.block} liquid={silos.liquid_contained} serial={silos.serial}/>)

function App() {
  //qua dovrò ritornare pagina1 o pagina2 o autenticazione a seconda dell'url
  //qua farò le richieste al backend per ottenere i dati da displayare sulle card (codice javascript --> foreach record nella tabella silos --> settare card Title, )
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row">
        <Header/>
      </div>
      <Router> 
      <Route path="/DetailPage" component={DetailPage}></Route>

       
       <Link to='/DetailPage'>
      <div className="body-container d-flex align-items-center justify-content-around row">
        {silosCardList}
      </div>
      </Link>
      </Router>
    </div>
  )
}

export default App;
