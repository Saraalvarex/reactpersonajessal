import React, { Component } from "react";
import prueba from './../assets/images/img-prueba.jpg'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home🏡</h1>
        <hr />
        <br />

{/* ------------ TABLA DEFAULT PARA EL EXAMENNN ------------------------------ */}
<div>
    <h4>Jugadores</h4>
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
            <th scope="col">Detalles</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {/* table table-secondary */}
        <tbody className="">
        <tr>
            <td>Nombre</td>
            <td>Imagen</td>
            <td>Detalles</td>
            <td><button className="btn btn-outline-warning">BOTON</button></td>
          </tr>
            {/* {
                this.state.jugadores.map((jugador, index) => {
                    return(<tr key={index}>
                        <th scope="row">{jugador.nombre}</th>
                        <td><img style={{width: "100px"}} src={jugador.imagen}/></td>
                        <td><NavLink className="btn btn-danger" to={"/detalles/"+jugador.idJugador}>Detalles</NavLink></td>
                    </tr>
                    )
                })
            } */}
        </tbody>
      </table>
    <hr /></div>

{/*----------- FORMULARIO-------------------- */}
<div>
          <form className="border rounded w-75 mx-auto mt-1 text-center">
          <label className="form-label mt-2">ID APUESTA</label>
          <input
            ref={this.id}
            type="number"
            className="form-control mx-auto w-75"
            defaultValue=""
          />
         <label className="form-label mt-2">USUARIO</label>
          <input
            ref={this.user}
            className="form-control mx-auto w-75"
            defaultValue=""
          />
          <label className="form-label mt-2">RESULTADO</label>
          <input
            ref={this.resu}
            className="form-control mx-auto w-75"
            defaultValue=""
          />
          <label className="form-label mt-2">Fecha</label>
          <input
            ref={this.fecha}
            className="form-control mx-auto w-75"
            defaultValue="defaultValue en los PUT para poder modificar"
          />
          <hr></hr>
          <button className="btn btn-primary my-3 mx-1" onClick={this.insertarApuesta}>
                Nueva apuesta
            </button>
        </form>
      </div>

{/* --------------- BOTONES. USAR MEJOR NavLink */}

        <h4>BUTONS</h4><br/>
        <NavLink type="button" className="btn btn-primary">Primary</NavLink>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
        <br/>
        <button type="button" className="btn btn-outline-primary">Primary</button>
        <button type="button" className="btn btn-outline-secondary">Secondary</button>
        <button type="button" className="btn btn-outline-success">Success</button>
        <button type="button" className="btn btn-outline-danger">Danger</button>
        <button type="button" className="btn btn-outline-warning">Warning</button>
        <button type="button" className="btn btn-outline-info">Info</button>
        <button type="button" className="btn btn-outline-light">Light</button>
        <button type="button" className="btn btn-outline-dark">Dark</button>
        
        <div className="d-grid gap-2 col-4 mx-auto"> {/* TIP: cambia el numero del col-n al que quieras para el width */}
            <button className="btn btn-primary" type="button">Button</button>
            <button className="btn btn-primary" type="button">Button</button>
        </div>

        <hr/>


{/* ------- UN CARD PREDETERMINADO COMO LA PRACTICA DE LA CHAMPIONS (la ficha del jugador) */}

        <h5>FICHA JUGADOR</h5>
        <div class="card text-center border w-75 mx-auto mt-3 rounded">
        <div class="card-header">
            HEADER
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">DESCRIPCION.</p>
            <NavLink to="/" className="btn btn-outline-dark">BOTON</NavLink>
        </div>
        <div class="card-footer text-muted">
            FOOTER DE LA FICHA
        </div>
        </div>

{/* -------------- PARA LAS IMAGENES, NO USAR COMO ICONO ------------------- */}

        <hr/>
        <h5>Esto lo encontré de paso, por si tenés que poner una imagen</h5>
        <p>Hazlo, pero con estilo 💄</p>
        {/* Copiar este cacho de figure a figure */}
        <figure class="figure">
          <img src={prueba} width="300" class="figure-img img-fluid rounded" alt="..." />
          <figcaption class="figure-caption text-end">
            A caption for the above image.
          </figcaption>
        </figure>
      </div>

    );
  }
}
