/*const dbPeliculas = require('../database') // suponiendo que has creado una conexión a tu base de datos MySQL y exportado como dbPeliculas

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
    getAll: getAllPeliculas(),
    getById: getPeliculaById(),
    add: addPelicula(),
    updateById: updatePeliculaById(),
    deleteById: deletePeliculaById()
}*//*
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alicia123',
    database: 'harryPotter',
})

app = require('express');
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
*//*
app.get('/peliculas/:id', function(req, res) {
    pool.query('SELECT * FROM harryPotter.peliculas_tabla WHERE id = ?', [req.params.id], (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})*//*
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alicia123',
    database: 'harryPotter',
})

module.exports = {
    getAll: function () {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM harryPotter.peliculas_tabla', function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);

            });
        });
    },

    getById: function (id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM harryPotter.peliculas_tabla WHERE id = ?', [id], function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results[0]);
            });
        });
    },

    add: function (pelicula) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO harryPotter.peliculas_tabla SET ?', pelicula, function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });
        });
    },

    updateById: function (id, pelicula) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE harryPotter.peliculas_tabla SET ? WHERE id = ?', [pelicula, id], function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });
        });
    },

    deleteById: function (id) {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM harryPotter.peliculas_tabla WHERE id = ?', [id], function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });
        });
    }
}*/
'use strict'

const config = require('config').database
const mysql = require('mysql')
const {get} = require("../../controllers/personajes/indexControllersPersonajes");

const pool = mysql.createPool({
    ...config,
    connectionLimit: 10
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

const dbPeliculas = []

function addPelicula(profesor) {
    dbPeliculas.push(profesor)
}
function getAllPeliculas() {
    return query('SELECT * FROM harryPotter.peliculas_tabla')
}
function getPeliculaById(id) {
    return query('SELECT * FROM harryPotter.peliculas_tabla WHERE id = ?', [id])
}
function addPelicula(profesor) {
    return query('INSERT INTO harryPotter.peliculas_tabla SET ?', profesor)

}
function updatePeliculaById(id, profesor) {
    return query('UPDATE harryPotter.peliculas_tabla SET ? WHERE id = ?', [profesor, id])
}
function deletePeliculaById(id) {
    return query('DELETE FROM harryPotter.peliculas_tabla WHERE id = ?', [id])
}

module.exports = {

    get: {
        all: getAllPeliculas,
        byId: getPeliculaById
    },
    add: addPelicula
}
