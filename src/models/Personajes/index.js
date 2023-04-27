

//const config = require('config').database
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alicia123',
    database: 'harryPotter',
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

const dbPersonajes = []

function addPersonajes(personaje) {
    dbPersonajes.push(personaje)
}
function getPersonajes() {
    return query('SELECT * FROM personajes_tabla')
}
function getPersonaje(id) {
    return query('SELECT * FROM personajes_tabla WHERE id = ?', [id])
}

module.exports = {
    get: {
        all: getPersonajes(),
        byId: getPersonaje()
    },
       add:addPersonajes()
}