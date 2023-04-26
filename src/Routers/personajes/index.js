/*'use strict'

const router = require('express').Router()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const personajes = require('./personajes')

router.use('/personajes', personajes)

module.exports = router*/

'use strict'

const router = require('express').Router()
const controladorPersonajes = require('../../src/controllers/personajes')
router.get('/', (req, res, next) => {
    controladorPersonajes.get.all()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

router.get('/:idPersonajes', (req, res, next) => {
    controladorPersonajes.get.byId(req.params.idPersonajes)
        .then(personajes => res.send(personajes))
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
