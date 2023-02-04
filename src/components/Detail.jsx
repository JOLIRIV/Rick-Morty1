import { useState, useEffect } from "react"; // agrego el hook useEffect (el otro estaba en la HW de estados. Este hook simula los ciclos de vida)
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
    const { detailId } = useParams(); // acá llamo a useParams y dentro del objeto tengo todas las propiedades.
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char); // cambio el estado y guardo en el estado a char (la información del personaje que trae el fetch)
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]) // este código lo copió todo del enunciado y cambió id por detailID que es lo mismo que traemos del fetch).

    return(
        <div>
            <button>
                <Link to='/home' >Home</Link>
            </button>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;

// Detail es una ruta dinámica. Se completa con un /(y el texto que sea) se indica que muestra el componente Detail (un título).
// El ? es un condicional chailing(?) Pregunta si tengo algo en el estado. Porque si no hay nada (en esos milisegundos está vacío). Se muestra la información cuando se cargue el estado (se evita que rompa la página).
// Es buena práctica en antes de mostrar se agregue el ? porque evita que rompa la aplicación.