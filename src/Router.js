import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearPersonaje from './components/CrearPersonaje';
import Home from './components/Home';
import MenuRutas from './components/MenuRutas';
import ModificarPersonaje from './components/ModificarPersonaje';
import NotFound from './components/NotFound';
import Personajes from './components/Personajes';
import Serie from './components/Serie';

export default class Router extends Component {
  render() {

    function SerieElement() {
      var {idserie} = useParams();
      return(<Serie id={idserie}></Serie>)
    }

    function PersonajesElement() {
      var {idserie} = useParams();
      return(<Personajes id={idserie}></Personajes>)
    }

    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/serie/:idserie' element={<SerieElement/>}/>
            <Route path='/personajes/:idserie' element={<PersonajesElement/>}/>
            <Route path='/crear/' element={<CrearPersonaje/>}/>
            <Route path='/modificar/' element={<ModificarPersonaje/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
