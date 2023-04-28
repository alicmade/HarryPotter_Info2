'use strict'

const router = require('express').Router()
const controladorPersonajes = require('../../controllers/personajes/indexControllersPersonajes.js')
router.get('/personajes', async(req, res, next) => {
    (await controladorPersonajes.get.all)()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})
router.get('/:idPersonajes', async(req, res, next) => {
    (await controladorPersonajes.get.byId)(req.params.idPersonajes)
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))

})

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
