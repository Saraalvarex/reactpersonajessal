import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from 'axios'
import logo from './../assets/images/pez.jpg'

export default class Menu extends Component {
  state = {
    series: [],
    status: false
  }
cargarSeries = () => {
    var request = "/api/series/"
    var url = Global.url+request;
    axios.get(url).then(res=>{
        console.log(res.data)
        this.setState({
            series: res.data
        })
    })
}
componentDidMount = () => {
    this.cargarSeries();
}
  render() {
    return (    
      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <img src={logo} width="60px" class="figure-img img-fluid rounded" alt="..." />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page"  to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page"  to="/crear/">Nuevo personaje</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page"  to="/modificar/">Modificar personaje</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Series
            </NavLink>
            <ul className="dropdown-menu" id="seriesdropdown">
              {/* <!-- <li><a className="dropdown-item" href="#">Action</a></li> Esto es lo que queremos generar dinámicamente --> */}
              {
                this.state.series.map((serie, index) => {
                  return (<li key={index}>
                    <NavLink to={"/serie/"+serie.idSerie}>{serie.nombre}</NavLink>
                    </li>)
                })
              }
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>
    );
  }
}
