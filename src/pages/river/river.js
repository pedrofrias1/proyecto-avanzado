import {useState, useEffect, Fragment } from "react"
import TarjetasRiver from "../../components/tarjRiver/tarjetasR";
import "./river.css"
const River=({setMostrarJugadores,setFormulario})=>{

    const [jugadores,setJugadores]=useState([]);
    const [jugadorEliminado,setJugadorEliminado]=useState(false);

    const traerInfo=async()=>{
         await fetch("https://api-jugadores-u6de.onrender.com/todosRiver")
        .then((data)=>{return data.json()})
        .then((resp)=>{setJugadores(resp)})
        .catch((err)=>{console.log("error en: "  + err)})
        
    
      };
    
      useEffect(()=>{
         traerInfo();
    
      },[])

      useEffect(()=>{
        if(jugadorEliminado===true){
            traerInfo()
            }
        },[jugadorEliminado]);





    return(
        <Fragment>
            <div className="text-center ">
                <h3 className="fw-bolder plantelR mt-4">Plantel de River Plate</h3>
            
               {jugadorEliminado===false?
                 <div className="row gap-3">
                    {jugadores.map((jugador)=>{
                        return <TarjetasRiver key={jugador.id}
                        data={jugador} setJugadorEliminado={setJugadorEliminado}
                        setFormulario={setFormulario} setMostrarJugadores={setMostrarJugadores} 
                          />
                    })}
                </div>:
                <p className="pelota d-flex align-items-center justify-content-center">Jugador Eliminado!</p>}
            </div>
        </Fragment>
        
    )
}
export default River