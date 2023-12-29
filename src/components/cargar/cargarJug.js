import { useEffect, useState,Fragment} from "react";
import "./cargar.css"

function CargarJug(){
    const [formData,setFormData]=useState({});
    const [metodo,setMetodo]=useState("");
    const [opOk,setOpOk]=useState(false);

    const cargarJugador=async(e)=>{
        e.preventDefault();

        let idJugador="";
        let objetoFetch={};

        if (metodo==="post") {
           let formInfo=new FormData(e.target);

           const poster=e.target[4].value
           formInfo.append("imagen",poster)

           objetoFetch={
            method:metodo,
            body:formInfo
           }
        }
        if (metodo==="put") {
           let formInfo=JSON.stringify(formData)
            idJugador=formData.id
            objetoFetch={
                method:metodo,
                Headers:{"Content-Type":'application/json'},
                body:formInfo
            }
        }

        
        await fetch(`https://api-jugadores-u6de.onrender.com/cargarJugador/${idJugador}`, objetoFetch)
        .then((resp)=>{return resp.json()})
        .then((data)=>{console.log(data)
            setOpOk(true)
            setTimeout(()=>{setOpOk(false)},2000) 
            if(metodo==="put"){
              localStorage.removeItem("informacionTarjeta")  
            }
            setFormData({})
        
        })
        .catch((err)=>{console.log(err)})
    }

    const cambioValor=(e)=>{
        console.dir(e.target)
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        let data=localStorage.getItem("informacionTarjeta");
        
        if (data===null) {
            setMetodo("post")
        } else {
            setMetodo("put")
            data=JSON.parse(data)
            setFormData(data)
        }
    },[])

    return(
        <Fragment>

        {opOk === false?
            <form className="boc" onSubmit={(event)=>cargarJugador(event)}>
            <label className="form-label mt-3" htmlFor="numero">Numero de camiseta del jugador</label>
            <input className="form-imput" id="numero" name="numCamiseta" value={formData.numCamiseta} onChange={(event)=>cambioValor(event)}/>

            <label className="form-label mt-3" htmlFor="anombre">Nombre del jugador</label>
            <input className="form-imput" id="nombre" name="nombre" value={formData.nombre} onChange={(event)=>cambioValor(event)}/>

            <label className="form-label mt-3" htmlFor="apellido">Apellido del jugador</label>
            <input className="form-imput" id="apellido" name="apellido" value={formData.apellido} onChange={(event)=>cambioValor(event)}/>
            

            <label className="form-label mt-3" htmlFor="puesto">Puesto del jugador</label>
            <select className="form-select" id="puesto" name="puesto" value={formData.puesto} onChange={(event)=>cambioValor(event)}>
                <option value="Arquero">Arquero</option>
                <option value="Defensor">Defensor</option>
                <option value="Volante">Volante</option>
                <option value="Delantero">Delantero</option>
            </select>
            <label className="form-label mt-3" htmlFor="edad">Edad del jugador</label>
            <input className="form-imput" id="edad" name="edad" value={formData.edad} onChange={(event)=>cambioValor(event)}/>

            <label className="form-label mt-3" htmlFor="imagen">cargar imagen del jugador</label>
            <input type="file" className="ms-2" id="imagen" name="imagen" />

        <input className="btn btn-succes d-block bg-white color-darck" type="submit" value={"cargar"} />
        
        </form>:
        
        <p className="cargado p-2 ">Jugador Cargado!!</p>
        }

        </Fragment>
        
    )
}
export default CargarJug