'use strict'

const router = require('express').Router()
const controladorPeliculas = require('../../controllers/peliculas')
router.get('/', (req, res, next) => {
    controladorPeliculas.get.all()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.get('/:idPeliculas', (req, res, next) => {
    controladorPeliculas.get.byId(req.params.idPeliculas)
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.post('/', (req, res, next) => {
    controladorPersonajes.add(req.body)
    res.send('Personaje almacenado')
})

router.delete('/:idPersonajes', (req, res, next) => {
    controladorPersonajes.delete(req.params.idPersonajes)
    res.send('Personaje eliminado')
})

router.put('/:idPersonajes', (req, res, next) => {
    controladorPersonajes.update(req.params.idPersonajes, req.body)
    res.send('Personaje actualizado')
})

module.exports = router
