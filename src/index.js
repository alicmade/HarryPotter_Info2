'use strict';
const mysql = require('mysql2/promise');
const express = require('express')
const app = express()

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
const connection = await mysql.createConnection(dbConfig);

// Método para ejecutar consultas SQL
async function runQuery(sql, params) {
    const [rows] = await connection.execute(sql, params);
    return rows;
}
pool.query('SELECT * FROM users', function (error, results, fields) {

    if (error) {
        console.log(error);
       return;
    }
    console.log('Fields ', fields)
    console.log('Resultados ', results)
  });


//hacer funciones CRUD
// Consulta de ejemplo
app.get('/peliculas', async (req, res) => {
    const users = await runQuery('SELECT * FROM users');
    res.json(users);
});

module.export= pool;
app.listen(3000)
