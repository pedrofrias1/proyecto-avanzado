import { Fragment,useState } from "react";
import River from "../../pages/river/river"
import "./mostrarR.css"
import CargarRiver from "../cargarR/cargarR";
function MostrarRiver(params) {
    const [mostrarJugadores,setMostrarJugadores]=useState(false)
    const [formulario,setFormulario]=useState(false)

    return(
        <Fragment>
           <div className="contenido d-flex flex-column align-items-center gap-3">
            <button className="btn botonR w-50" onClick={()=>{setMostrarJugadores(true);setFormulario(false)}}>Plantel</button>
            <button className="btn botonR w-50" onClick={()=>{setFormulario(true);setMostrarJugadores(false)}}>Cargar jugador</button>
           </div>
            
           
            {mostrarJugadores?
            <section className="container d-flex flex-column align-items-center">
                <button className="btn btn-danger row align-self-end" onClick={()=>setMostrarJugadores(false)}>X</button>
                < River setMostrarJugadores={setMostrarJugadores} setFormulario={setFormulario} />
            </section>
            :""}

            {formulario?
            <section className="container d-flex flex-column align-items-center">
                <button className="btn btn-danger row align-self-end" onClick={()=>setFormulario(false)}>X</button>
                <CargarRiver/>
            </section>
            :""}
        </Fragment>
    )
}
export default MostrarRiver;