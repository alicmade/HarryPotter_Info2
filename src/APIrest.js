'use strict';

const express = require('express')
const app = express()
const mysql = require('mysql2');

const rutaPersonjes = require('./Routers/personajes/indexPersonajesRouter')
const rutaPeliculas= require('./Routers/peliculas/indexPeliculasRouter')

//const rutaPeliculas= require('./controllers/peliculas/indexControllers.js')



app.get('/', (req, res) => {
    res.send('Bienvenido a mi API de Harry Potter');
});

const pool = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    password: 'alicia123',
    database: 'harryPotter',
    connectionLimit: 10,
});



app.listen(3000,() => {
    console.log('Servidor escuchando en el puerto 3000');
})



app.get('/peliculas',  function (req, res){
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
})

app.get('/personajes', function (req, res)  {
    pool.query('SELECT * FROM harryPotter.personajes_tabla', function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        //console.log('Fields ', fields)
        console.log('Resultados ', results)
        res.send(results)
    });
});
app.get('/personajes/:id', function(req, res) {
    pool.query('SELECT * FROM harryPotter.personajes_tabla WHERE id = ?', [req.params.id], (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})

app.use('/peliculas', rutaPeliculas)
app.use('/personajes', rutaPersonjes)
module.export= pool;
