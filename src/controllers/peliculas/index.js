const moduloPeliculas = require('../models/peliculas')

function getPeliculas(req, res, next) {
    moduloPeliculas.getAll()
        .then((peliculas) => {
            res.json(peliculas)
        })
        .catch((error) => {
            next(error)
        })
}

function getPeliculaById(req, res, next) {
    const id = req.params.id

    moduloPeliculas.getById(id)
        .then((pelicula) => {
            if (pelicula) {
                res.json(pelicula)
            } else {
                res.status(404).json({ error: `Pelicula con id ${id} no encontrada` })
            }
        })
        .catch((error) => {
            next(error)
        })
}

function addPelicula(req, res, next) {
    const pelicula = req.body

    moduloPeliculas.add(pelicula)
        .then(() => {
            res.status(201).send()
        })
        .catch((error) => {
            next(error)
        })
}

function updatePeliculaById(req, res, next) {
    const id = req.params.id
    const pelicula = req.body

    moduloPeliculas.updateById(id, pelicula)
        .then(() => {
            res.status(204).send()
        })
        .catch((error) => {
            next(error)
        })
}

function deletePeliculaById(req, res, next) {
    const id = req.params.id

    moduloPeliculas.deleteById(id)
        .then(() => {
            res.status(204).send()
        })
        .catch((error) => {
            next(error)
        })
}

module.exports = {
    getPeliculas,
    getPeliculaById,
    addPelicula,
    updatePeliculaById,
    deletePeliculaById
}
