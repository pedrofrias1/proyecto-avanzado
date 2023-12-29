import './App.css';
import {useState, useEffect } from 'react';

function App() {
  const [jugadores, setJugadores]=useState([]);


  return (
     <div className="App">
      <ul>
        {jugadores.map((jugador)=>{
          return <li key={jugador.id}>{jugador.puesto} </li>
        })}
      </ul>
     </div>
  );
}

export default App;
