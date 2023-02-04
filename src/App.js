import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav";
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';// useState es un hook, se importa en corchete.
import { Routes, Route } from 'react-router-dom';

// no renderizo search porque lo hace nav (ver version 1ra) hay que importar Nav.

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => { // función para agregar nuevos personajes es el character de App.js
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id) // me quedo con todos los personajes cuya id sea distinta a la de los personajes que estoy recibiendo por parámetro.
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
      </Routes>
    </div>
  )
} // Nav on Search le paso la función. 
  //Cards onClose={onClose} está pasando por propiedades a Cards la función onClose.

export default App
//Cards tiene propiedades (onClose) y characters. Totas las propiedades necesarias hay que incluirlas.
// About se renderiza el componente About (element)
// Detail. El :detailId indica una variable (no va a ser siempre el mismo valor. Por ejemplo si entro a detail/2 muestra el detalle de Morty). Teniendo la misma ruta se ingresa a distintos detalles, por eso es dinámico.
// Todos estos componentes se importan y se rutean.
// El encargado de mostrar los personajes es Cards. Se esta indicando que se muestran únicamente en home (por eso hay que ir al path /home).
// SPA es single page application (lo que estamos haciendo)
//useParams (está en Detail) es un objeto y una de las propiedades del objeto es detailId, que es el nombre del valor ingresado por el usuario (un 2,3,4, etc.).
