import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from './components/Menu';
import Equipo from './components/Equipo';
import Home from './components/Home';
import Jugadores from './components/Jugadores';
import Apuestas from './components/Apuestas';
import CrearApuesta from './components/CrearApuesta';

export default class Router extends Component {
  render() {

    function EquipoElement () {
        var {idequipo} = useParams();
        return (<Equipo idEquipo={idequipo}/>)
    }

    function JugadoresElement () {
      var {idequipo} = useParams();
      return (<Jugadores idEquipo={idequipo}/>)
    }

    function ApuestasElement () {
      var {num} = useParams();
      return (<Apuestas numero={num}/>)
    }

    return (
        <BrowserRouter>
        <Menu/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/equipo/:idequipo" element={<EquipoElement/>}/>
                  <Route path="/jugadores/:idequipo" element={<JugadoresElement/>}/>
                  <Route path="/apuestas" element={<Apuestas/>}/>
                  <Route path="/crearapuesta" element={<CrearApuesta/>}/>
                  <Route path="/apuestas/:num" element={<ApuestasElement/>}/>
              </Routes>
          </BrowserRouter>
    )
  }
}
