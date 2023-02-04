import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id }) {
   //props --> {name: '', species: '', gender: '', image: '', onClose: fn} // Card utiliza la función onClose (que viene de Cards, y antes de App) en el button
   return (
      <div>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}


export default Card;
// La idea del link es que lleve a todos los detalles de 1 personaje.
// La ruta detail ya está definida en la app. Es el link del nombre que lleva a los detalles del personaje.
// El estado se usa para un comportamiento propio del componente. Las rutas para mostrar distintos componentes en distintos lugares.
