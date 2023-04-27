'use strict'

document.addEventListener('DOMContentLoaded', async function() {
    await cargarPersonajes();
    document.getElementById("boton-personajes").addEventListener("click", obtenerPersonajes);
});
async function obtenerPersonajes() {
    let id = parseInt(document.getElementById("id").value)

    fetch(
        'https://localhost:3000/peliculas')
        .then(response => {
            // response es un objeto HTTP, podemos acceder a las
            //  cabeceras y al contenido. Vamos a devolver el
            //  contenido, que sabemos que es un objeto JSON
            return response.json()
        })
        .then(info => {
            extraerPeliculas(info)
            // info es el objeto JSON recuperado
            //  contenedor.textContent = JSON.stringify(info, null, ' ')
        })
        .catch(e => {
            contenedor.textContent =
                "Hubo un error recuperando la información de la película: " + e
        })
}


function extraerPeliculas(objectoSW) {
    //cambiar nombre de la variable elemento
    let peliculas = objectoSW.results.map(elemento => {
        return {
            title: elemento.title,
            url: elemento.url
        }
    })

    let listaPeliculas = document.getElementById("listaPelicula-link")
    peliculas.forEach(pelicula => {

        let peliId = pelicula.url.match(/([0-9]*)\/?$/)[1]

        let a = document.createElement("a")
        a.innerText = pelicula.title
        a.href = "pelicula.html?id=" + peliId

        let li = document.createElement("li")
        li.appendChild(a)
        listaPeliculas.appendChild(li)
    })

}
