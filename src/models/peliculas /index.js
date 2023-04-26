'use strict'

const config = require('config').database
const mysql = require('mysql')

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

const dbProfesores = []

function addProfesor(profesor) {
    dbProfesores.push(profesor)
}
/*function getProfesores() {
    return query('SELECT * FROM peliculas_tabla')
}
function getProfesor(id) {
    return query('SELECT * FROM peliculas_tabla WHERE id = ?', [id])
}*/
pool.query('SELECT * FROM peliculas_tabla', function (error, results, fields) {

    if (error) {
        console.log(error);
        return;
    }
    //console.log('Fields ', fields)
    console.log('Resultados ', results)
});


//hacer funciones CRUD
app.get('/peliculas', async (req, res) => {
    const users = await runQuery('SELECT * FROM peliculas_tabla');
    res.json(users);
});

module.exports = {
    get: {
        all: getProfesores,
        byId: getProfesor
    },
    add: addProfesor
}