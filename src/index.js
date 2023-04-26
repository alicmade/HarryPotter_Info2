'use strict';
const mysql = require('mysql2');
const express = require('express')
const app = express()
//ruta para router de peli y personajes
const rutaPersonjes= require('./Personajes/index')

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API de Harry Potter');
});
// Configuración de la conexión a la base de datos
const pool = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    password: 'Loritos11',
    database: 'personajes',
    connectionLimit: 10,
});

// Conexión a la base de datos
//const connection = await mysql.createConnection(pool);

// Método para ejecutar consultas SQL
/*async function runQuery(sql, params) {
    const [rows] = await connection.execute(sql, params);
    return rows;
}*/

module.export= pool;
app.listen(3000)
