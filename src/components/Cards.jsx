import Card from './Card';

function Cards({ characters, onClose }) { // [{...}, {...}, {...}] es la función onClose, que se recibe por propiedades desde App, y se pasa al componente Card.

   return (
      <div>
         {
            characters.map(({id, name, species, gender, image}) => {
              return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
              />
            })
         }
      </div>
   )
} // onClose(id) le estoy pasando la propiedad id

export default Cards;
//El componente cards envuelve a cada una de las cartas. Las propiedades se las pasa
// el padre (function Cards le pasa las propiedades al hijo)
// el key es sólo para React. Por eso hay que crear otra propiedad id.
// Cards retorna una carta por cada personaje. Contiene a las cartas.