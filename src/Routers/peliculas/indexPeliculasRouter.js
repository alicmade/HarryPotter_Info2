'use strict'


//const controladorPeliculas = require('../models/peliculas /indexPeliculas.js')
//const controladorPeliculas = require("../controllers/peliculas/indexControllers");
//const router = require('express').Router()
//const router = require('express').Router()

/*
module.exports = {
    getAll: getAllPeliculas,
    getById: getPeliculaById(),
    add: addPelicula(),
    updateById: updatePeliculaById(),
    deleteById: deletePeliculaById()
}*/

/*
app.get('/peliculas',  (req, res) => {
    pool.query('SELECT * FROM harryPotter.peliculas_tabla', function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        //console.log('Fields ', fields)
        console.log('Resultados ', results)
        res.send(results)
    });
});

app.get('/peliculas/:id', function(req, res) {
    pool.query('SELECT * FROM harryPotter.peliculas_tabla WHERE id = ?', [req.params.id], (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });

router('/peliculas', async(req, res) => {
    (await controladorPeliculas.get.all)()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))

})

router('/peliculas', (req, res) => {
    controladorPeliculas.add(req.body)
    res.send('Personaje almacenado')
})

router('/peliculas/:idPersonajes', (req, res) => {
    controladorPeliculas.delete(req.params.id)
    res.send('Personaje eliminado')
})

router('/peliculas/:idPersonajes', (req, res) => {
    controladorPeliculas.update(req.params.id, req.body)
    res.send('Personaje actualizado')
})


module.exports = router*/
const router = require('express').Router();
const controladorPeliculas = require("../../controllers/peliculas/indexControllers");

router.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await controladorPeliculas.get.all();
        res.send(peliculas);
    } catch (err) {
        console.error(err);
        res.send('ERROR');
    }
});

router.post('/peliculas', (req, res) => {
    controladorPeliculas.add(req.body);
    res.send('Personaje almacenado');
});

router.delete('/peliculas/:idPersonajes', (req, res) => {
    controladorPeliculas.delete(req.params.id);
    res.send('Personaje eliminado');
});

router.put('/peliculas/:idPersonajes', (req, res) => {
    controladorPeliculas.update(req.params.id, req.body);
    res.send('Personaje actualizado');
});

module.exports = router;

