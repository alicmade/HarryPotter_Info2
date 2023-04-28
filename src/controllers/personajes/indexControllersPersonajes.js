const moduloPersonaje = require('../../models/Personajes/index')

function getPersonajes(req, res, next) {
    moduloPersonaje.getAll()
        .then((personaje) => {
            res.json(personaje)
        })
        .catch((error) => {
            next(error)
        })
}

function getPersonajeById(req, res, next) {
    const id = req.params.id

    moduloPersonaje.getById(id)
        .then((personaje) => {
            if (personaje) {
                res.json(personaje)
            } else {
                res.status(404).json({ error: `Pelicula con id ${id} no encontrada` })
            }
        })
        .catch((error) => {
            next(error)
        })
}

function addPersonaje(req, res, next) {
    const personaje = req.body

    moduloPersonaje.add(personaje)
        .then(() => {
            res.status(201).send()
        })
        .catch((error) => {
            next(error)
        })
}

function updatePersonajeById(req, res, next) {
    const id = req.params.id
    const personaje = req.body

    moduloPersonaje.updateById(id, personaje)
        .then(() => {
            res.status(204).send()
        })
        .catch((error) => {
            next(error)
        })
}

function deletePersonajeById(req, res, next) {
    const id = req.params.id

    moduloPersonaje.deleteById(id)
        .then(() => {
            res.status(204).send()
        })
        .catch((error) => {
            next(error)
        })
}

module.exports = {
    get: {
        all: getPersonajes,
        byId: getPersonajeById
    },
    add: addPersonaje,
    update: updatePersonajeById,
    delete: deletePersonajeById
}
/*
module.exports = {
    get: {
        all: moduloPersonaje.get.all,
        byId: moduloPersonaje.get.byId
    },
    add: moduloPersonaje.add,
    update: moduloPersonaje.update,
    delete: moduloPersonaje.delete
}*/