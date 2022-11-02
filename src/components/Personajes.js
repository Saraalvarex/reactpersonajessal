import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {NavLink} from "react-router-dom";

export default class Personajes extends Component {
    state = {
        personajes: [],
        status: false
    }

    cargarPersonajes = () => {
        var id = this.props.id;
        console.log(id)
        var request = "/api/Series/PersonajesSerie/"+id
        var url = Global.url+request;
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState({
                personajes: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarPersonajes();
    }

  render() {
    return (
      <div>
          <h4>Personajes</h4>
    <NavLink className="btn btn-danger" to={"/serie/"+this.props.id}>Volver</NavLink>
      <table className="table table-dark table-hover">
        {" "}
        {/* Añade al className color con table-primary, secondary, success, danger, warning
      info, ligth y dark 😎  */}
        {/* Si quieres que resalten tonalidades distintas añade también al className:
          table-striped  --> Las filas resaltan
          table-striped-columns  --> Si lo prefieres en columnas 
          table-hover  --> Si quieres que resalten on mouse over
      */}
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
            {
                this.state.personajes.map((personaje, index) => {
                    return(<tr key={index}>
                        <th scope="row">{personaje.nombre}</th>
                        <td><img style={{width: "200px"}} src={personaje.imagen}/></td>
                    </tr>
                    )
                })
            }
          
        </tbody>
      </table>
      <hr /></div>
    )
  }
}
