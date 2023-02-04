import { useState } from "react"; // pide que SearchBar mantenga un estado interno del nombre del personaje y por eso se importa.

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('') // el estado inicial es un string vacío (no es un objeto en este caso).

   const handleChange = (event) => { // el evento se dispara con onChange. handleChange modifica el estado character. Acá no se hace copia porque no interesa quedarse con lo que escribió antes. Importa solamente lo que escribe ahora.
      setCharacter(event.target.value) // le aviso al estado para que guarde el valor. Mi estado va a ser lo que sea que escriba el usuario (event.target.value)
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
} // hay un pase de propiedades de padre a hijo App / Nav / SearchBar. Las propiedades
// siempre van para abajo. Los eventos viajan para arriba (la función onSearch se ejecuta
// cuando hago clic en el botón Agregar. Esta función estpa en App.)
// de esta forma la función no se ejecuta sola (no es lo esperado). Por eso se pone la callback (()=>)
export default SearchBar;