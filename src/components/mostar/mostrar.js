import { Fragment,useState } from "react";
import Boca from "../../pages/boca/bocaJuniors";
import "./mostrar.css"
import CargarJug from "../cargar/cargarJug";
function Mostrar(params) {
    const [mostrarJugadores,setMostrarJugadores]=useState(false)
    const [formulario,setFormulario]=useState(false)

    return(
        <Fragment>
           <div className="contenido d-flex flex-column align-items-center gap-3">
            <button className="btn boton w-50" onClick={()=>{setMostrarJugadores(true);setFormulario(false)}}>Plantel</button>
            <button className="btn boton w-50" onClick={()=>{setFormulario(true);setMostrarJugadores(false)}}>Cargar jugador</button>
           </div>
            
           
            {mostrarJugadores?
            <section className="container d-flex flex-column align-items-center">
                <button className="btn btn-danger row align-self-end" onClick={()=>setMostrarJugadores(false)}>X</button>
                <Boca  setMostrarJugadores={setMostrarJugadores} setFormulario={setFormulario} />
            </section>
            :""}

            {formulario?
            <section className="container d-flex flex-column align-items-center">
                <button className="btn btn-danger row align-self-end" onClick={()=>setFormulario(false)}>X</button>
                <CargarJug/>
            </section>
            :""}
        </Fragment>
    )
}
export default Mostrar;