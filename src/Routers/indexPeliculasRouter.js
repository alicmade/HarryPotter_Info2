'use strict'

const router = require('express').Router()
//const controladorPeliculas = require('../models/peliculas /indexPeliculas.js')
const controladorPeliculas = require("../controllers/personajes/indexControllersPersonajes.js");


/*
module.exports = {
    getAll: getAllPeliculas(),
    getById: getPeliculaById(),
    add: addPelicula(),
    updateById: updatePeliculaById(),
    deleteById: deletePeliculaById()
}*/


router.post('/', (req, res, next) => {
    controladorPersonajes.add(req.body)
    res.send('Personaje almacenado')
})

router.delete('/:idPersonajes', (req, res, next) => {
    controladorPersonajes.delete(req.params.id)
    res.send('Personaje eliminado')
})

router.put('/:idPersonajes', (req, res, next) => {
    controladorPersonajes.update(req.params.id, req.body)
    res.send('Personaje actualizado')
})

module.exports = router