'use strict'

const config = require('config').database
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alicia123',
    database: 'harryPotter'
})


function query(sql, params) {
    return new Promise( (resolve, reject) => {
        pool.query(sql, params, (err, res, fields) => {
            if (err) {
                console.log('ERROR DB', err)
                reject(err)
                return
            }
            console.log('Fields', fields)
            console.log('Resultados', res)
            resolve(res)
        })
    } )
}
/*
const dbPeliculas= []

function addPelicula(pelicula) {
    dbPeliculas.push(pelicula)
}
function getPeliculas() {
    return query('SELECT * FROM harryPotter.peliculas_tabla')
}
function getPelicula(id) {
    return query('SELECT * FROM harryPotter.peliculas_tabla WHERE id = ?', [id])
}


//hacer funciones CRUD
/*app.get('/peliculas', async (req, res) => {
    const users = await runQuery('SELECT * FROM peliculas_tabla');
    res.json(users);
});

module.exports = {
    get: {
        all: getPeliculas(),
        byId: getPelicula()
    },
    add:addPelicula()

}*/
