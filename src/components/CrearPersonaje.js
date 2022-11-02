import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {Navigate} from 'react-router-dom';
import { data } from 'jquery';

export default class CrearPersonaje extends Component {

    idperson = React.createRef();
    nom = React.createRef();
    srcimg = React.createRef();
    // idserie = React.createRef();
    
    state = {
        mensaje: "",
        status: false,
        series: []
    }
    // recuperarValor(event) {
    //     console.log(parseInt(event.target.value))
    //     return(event.target.value)
    //   }
    //EN axios EL METODO POST RECIBE DOS PARAMENTROS
    //1) URL DEL API
    //2) OBJETO JSON PARA EL API
    insertarPersonaje = (e)=> {
        e.preventDefault();
        var request = "api/Personajes/"
        var url = Global.url+request
        var idpersonaje = this.idperson.current.value;
        var nombre = this.nom.current.value;
        var src = this.srcimg.current.value;
        // var nomserie = this.idserie.current.value;

        var data = {
            idPersonaje: idpersonaje,
            nombre: nombre,
            imagen: src,
            // idSerie: idserie
            idSerie: 1
        }
        console.log(data)
        
        axios.post(url, data).then(res=>{
            this.setState({
                mensaje: "Insertado!",
                status: true
            });
        });
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

    componentDidMount = () =>{
        this.cargarSeries();
    }

  render() {
      if(this.state.status==true){
        // return(<Navigate to={"/personajes/"+data.idSerie}/>)
        console.log("INSERTADO")
      }
    return (
        <div>
        <form className="border rounded w-75 mx-auto mt-1 text-center">
        <label className="form-label mt-2">ID PERSONAJE</label>
        <input
          ref={this.idperson}
          type="number"
          className="form-control mx-auto w-75"
          defaultValue=""
        />
       <label className="form-label mt-2">NOMBRE</label>
        <input
          ref={this.nom}
          className="form-control mx-auto w-75"
          defaultValue=""
        />
        <label className="form-label mt-2">SRC IMAGEN</label>
        <input
          ref={this.srcimg}
          className="form-control mx-auto w-75"
          defaultValue=""
        />
        <br></br>
        <select className="form-select">
              {
                this.state.series.map((serie, index) => {
                  return (<option ref={this.nomserie} key={serie.idSerie}>
                    {serie.nombre}
                    </option>)
                })
              }
            </select>
        <hr></hr>
        <button className="btn btn-primary my-3 mx-1" onClick={this.insertarPersonaje}>
              Insertar personaje
          </button>
      </form>
    </div>
    )
  }
}
