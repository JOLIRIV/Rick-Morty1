import SearchBar from "./SearchBar"; // cuando el homework dice "debe incluir el componente ..." se importa.
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => { // esta es la función onSearch
    return(
        <nav>
            <Link to='about' >About</Link>
            <Link to='home' >Home</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav; // para que se pueda ver en pantalla

// para agregar Link: import {Link}
// se agrega el Link en el nav  (Link to='about' ...)
// se indica adónde llevan los Link (about y home respectivamente)