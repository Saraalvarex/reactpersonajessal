import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {NavLink} from "react-router-dom";

export default class Serie extends Component {
  
    state = {
        serie: {},
        state: false
    }

    cargarSerie = () => {
        var id = this.props.id;
        var request = "/api/series/"+id
        var url = Global.url+request;
        axios.get(url).then(res => {
            this.setState({
                serie: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarSerie();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.id!=oldProps.id){
            this.cargarSerie();
        }
    }

  render() {

    return (
      <div>
        <div className="card text-center">
        <div className="card-header">
            {
                this.state.serie.nombre
            }
        </div>
        <div class="card-body">
            <img style={{width: "300px"}} src={this.state.serie.imagen}/>
            <h5 className="card-title">Año: {this.state.serie.anyo}</h5>
            <p className="card-text">Puntuacion: {this.state.serie.puntuacion}</p>
            <NavLink to={"/personajes/"+this.state.serie.idSerie} className="btn btn btn-success">Personajes</NavLink>
            {/* <NavLink to="/personajes/" className="btn btn btn-success">Personajes</NavLink> */}
        </div>
        </div>
        </div>
    )
  }
}