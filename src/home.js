
import "./home.css"

import escudoBoca from "./img/escudoBoca.png"
import escudoRiver from "./img/escudoRiver.png"

import MostrarRiver from "./components/mostrarR/mostrarR"
import Mostrar from "./components/mostar/mostrar"

const Home=()=>{

 

return(
    <header className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="fw-bolder">Crea, o modifica el plantel a tu gusto</h2>
      
        <ul className="d-flex gap-2">
            <li className="d-flex flex-column align-items-center gap-3">
                <img src={escudoBoca} alt="logo-Boca" className="escudo"/>
                <Mostrar />
            </li>
            <li className="d-flex flex-column align-items-center gap-3">
            <img src={escudoRiver} className="escudo" alt="logo-river" />
                <MostrarRiver/>
            </li>
        </ul>
    </header>
)

}
export default Home