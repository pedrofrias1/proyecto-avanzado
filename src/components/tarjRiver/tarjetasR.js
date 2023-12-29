import { Fragment } from "react"

import "./tarjetasRiv.css"

const TarjetasRiver=({data, setJugadorEliminado,setMostrarJugadores,setFormulario})=>{

    const handler= async ()=>{
        let id=data.id
        

       let respuesta=await fetch("https://api-jugadores-u6de.onrender.com/eliminarRiver",{
            method:"delete",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({id:id})
        })
        .then((data)=>{return data.json()})
        .then(()=>{
            setJugadorEliminado(true);
            setTimeout(()=>{setJugadorEliminado(false)},2000)})
        .catch((err)=>{console.log(err)});
        return respuesta
    }

    const editarJugador=()=>{
        localStorage.setItem("informacionTarjeta",JSON.stringify(data))


        setMostrarJugadores(false);
        setFormulario(true);
    }
    return(

        <Fragment>
            
            <div className='river col-sm-4'>
            <div className="card-body text-light d-flex flex-column gap-3">
                <img className='img-tarjeta' src={data.imagen} alt=''/>
                <h2 className="card-title fs-5 text-center">{data.nombre} {data.apellido} </h2>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-withe">
                        Puesto:<strong> {data.puesto} </strong>
                    </li>
                    <li className="list-group-item bg-withe">
                        Edad:<strong> {data.edad}</strong>
                    </li>
                    <li className="list-group-item bg-withe">
                        Numero de camiseta:<strong> {data.numCamiseta}</strong>
                    </li>
                </ul>
                <button className="btn btn-danger border-0" onClick={handler}>Eliminar Jugador</button>
                <button className="btn btn-success border-0" onClick={editarJugador}>Editar Jugador</button>
        </div>
        </div>
        </Fragment>
    )



}

export default TarjetasRiver;