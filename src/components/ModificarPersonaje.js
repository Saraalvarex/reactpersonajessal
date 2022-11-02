import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { data } from 'jquery';
// /api/Personajes/{idpersonaje}/{idserie}
// Tendremos la posibilidad de cambiar a un personaje de serie:
export default class ModificarPersonaje extends Component {
    selectpersonaje = React.createRef();
    selectserie = React.createRef();

    state = {
        statusGet: false,
        statusPut: false,
        personajes: [],
        series: []
    }

    cargarSeries = () => {
      var request = "/api/series/"
      var url = Global.url+request;
      axios.get(url).then(res=>{
          this.setState({
              series: res.data
          })
      })
  }

    cargarPersonajes = () => {
      var request = "/api/personajes/"
      var url = Global.url+request;
      axios.get(url).then(res=>{
          this.setState({
              personajes: res.data
          })
      })
  }


    modificarPersonaje = (e) =>{
    e.preventDefault();
    // var idpersonaje = this.props.idp
    // var idserie = this.props.ids
    //AQUI SACO TEXTO NO NUMBER
       var idpersonaje = this.selectpersonaje.current.value;
       var idserie = this.selectserie.current.value;

       var request = "/api/Personajes/"+idpersonaje+"/"+idserie
       var url = Global.url+request
       axios.put(url).then(res=> {
            this.setState({
                statusPut: true
            })
       })
    }

    componentDidMount = () => {
        this.cargarSeries()
        this.cargarPersonajes()
    }

  render() {
    if (this.state.statusPut==true){
        return (<Navigate to={"/personajes/"+this.selectserie.current.value}/>)
      }
    return (
      <div>
          <form className="">
          <label>Seleccione una serie</label>
          <select ref={this.selectserie} className="form-select">
          {
                this.state.series.map((serie, index) => {
                  return (<option value={serie.idSerie} key={index}>
                    {serie.nombre}
                    </option>)
                })
              }
              </select>
         <label>Seleccione un personaje</label>
         <select ref={this.selectpersonaje} className="form-select">
              {
                this.state.personajes.map((personaje, index) => {
                  return (<option value={personaje.idPersonaje} key={index}>
                    {personaje.nombre}
                    </option>)
                })
              }
            </select>
          <hr></hr>
          <button className='btn btn-info' onClick={this.modificarPersonaje}>
                Guardar cambios
            </button>
        </form>
      </div>
    )
  }
}
