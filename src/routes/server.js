// const http = require('http');
// const characters = require('../utils/data'); // se traía de data

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     if (req.url.includes('rickandmorty/character')) {
//         let id = req.url.split('/').at(-1);

//         // let characterFilter = characters.filter(char => char.id === Number(id))

//         let characterFilter = characters.find(char => char.id === Number(id))

//         res
//             .writeHead(200, { "Content-type": "application/json" })
//             .end(JSON.stringify(characterFilter))
//     }


// }).listen(3001, 'localhost')

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/rickandmorty/character/:id', async (req, res) => { // con async se indica asincronía
    try {
        const { id } = req.params;

        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`); // con await indica que estamos esperando la respuesta
        const data = response.data;

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }

        res.status(200).json(infoCharacter);

    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.get('/rickandmorty/detail/:detailId', async (req, res) => {
    try {
        const { detailId } = req.params;

        const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`);// la petición a la Api es del mismo endpoint que ID pero la información es distinta.
        // la petición se hace a la API porque no tenemos base de datos.

        const infoCharacterDetail = {
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
            image: data.image
        }

        res.status(200).json(infoCharacterDetail);

    } catch (error) {
        res.status(404).send(error.message);
    }
})

let fav = []; // es let porque hay que pisarlo con el delete

app.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json(fav);
})


app.post('/rickandmorty/fav', (req, res) => {
    fav.push(req.body); // en los post la información llega en el body. Se pone el body completo.
    // se podrían hacer validaciones del body, pero como no se especifica lo que se va a recibir, se omite por el momento.
    res.status(200).send('Se guardaron correctamente los datos');
})


app.delete('/rickandmorty/fav/:id', (req, res) => {    
    const { id } = req.params;

    const favFiltered = fav.filter(char => char.id !== parseInt(id)); // el parseInt convierte un string a un integer. se queda solamente con los que sean distintos al id enviado por params.
    fav = favFiltered; // se pisa con todos los que no coincidió con el id enviado, y de esta forma se borra.

    res.status(200).send('Se eliminó correctamente')
})








module.exports = app; 















module.exports = app;



