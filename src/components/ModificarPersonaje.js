import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// /api/Personajes/{idpersonaje}/{idserie}
// Tendremos la posibilidad de cambiar a un personaje de serie:
export default class ModificarPersonaje extends Component {
    idapuesta = React.createRef();
    usuario = React.createRef();
    resultado = React.createRef();
    fecha = React.createRef();

    state = {
        statusGet: false,
        statusPut: false,
        personaje: {}
    }

    cargarInputs = () => {
        var idpersonaje = this.props.idp
        var idserie = this.props.ids
        var request = "/api/Personajes/"+idpersonaje+idserie
        var url = Global.url+request
        axios.get(url).then(res=>{
            this.setState({
                statusGet: true,
                apuesta: res.data
            });
        });
    }

    modificarPersonaje = (e) =>{
    e.preventDefault();
    var idpersonaje = this.props.idp
    var idserie = this.props.ids
    var request = "/api/Personajes/"+idpersonaje+idserie
    var url = Global.url+request
    
       var idap = this.idapuesta.current.value;
       var user = this.usuario.current.value;
       var resu = this.resultado.current.value;
       var fecha = this.fecha.current.value;

       var data = {
            idApuesta: idap,
            usuario: user,
            resultado: resu,
            fecha: fecha
       }
       
       axios.put(url, data).then(res=> {
            this.setState({
                statusPut: true
            })
       })
    }

    componentDidMount = () => {
        this.cargarInputs()
    }
  render() {
    if (this.state.statusPut==true){
        return (<Navigate to={"/personajes/"+this.props.ids}/>)
      }
    return (
      <div>
          <form className="">
          <label>Seleccione una serie</label>
          <input
            ref={this.idapuesta}
            type="number"
            className="form-control"
            defaultValue={this.state.apuesta.idApuesta}
          disabled/>
         <label>Seleccione un personaje</label>
          <input
            ref={this.usuario}
            className="form-control"
            defaultValue={this.state.apuesta.usuario}
          />
          <hr></hr>
          <button className='btn btn-info' onClick={this.modificarPersonaje}>
                Guardar cambios
            </button>
        </form>
      </div>
    )
  }
}
