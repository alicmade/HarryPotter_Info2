const dbPeliculas = require('../database') // suponiendo que has creado una conexión a tu base de datos MySQL y exportado como dbPeliculas

function getAllPeliculas() {
    return dbPeliculas.query('SELECT * FROM peliculas_tabla')
}

function getPeliculaById(id) {
    return dbPeliculas.query('SELECT * FROM peliculas_tabla WHERE id = ?', [id])
}

function addPelicula(pelicula) {
    return dbPeliculas.query('INSERT INTO peliculas_tabla SET ?', pelicula)
}

function updatePeliculaById(id, pelicula) {
    return dbPeliculas.query('UPDATE peliculas_tabla SET ? WHERE id = ?', [pelicula, id])
}

function deletePeliculaById(id) {
    return dbPeliculas.query('DELETE FROM peliculas_tabla WHERE id = ?', [id])
}

module.exports = {
    getAll: getAllPeliculas,
    getById: getPeliculaById,
    add: addPelicula,
    updateById: updatePeliculaById,
    deleteById: deletePeliculaById
}
