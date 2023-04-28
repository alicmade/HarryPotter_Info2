'use strict'
/*
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

}*/
// controllers/peliculasController.js

async function buscarPersonaje() {
    let id = parseInt(document.getElementById('input-busqueda').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }

    try {
        let res = await fetch('http://localhost:3000/personajes/' + id);
        let personaje = await res.json();
        console.log(personaje);

        let resultadosDOM = document.getElementById('resultados');
        resultadosDOM.innerHTML = '';

        let div = document.createElement('div');
        let pNombre = document.createElement('p');
        pNombre.innerText = `Nombre: ${personaje.name}`;
        let pDesc = document.createElement('p');
        pDesc.innerText = `Descripción: ${personaje.description}`;
        let pId = document.createElement('p');
        pId.innerText = `Id personaje: ${personaje.id}`;

        div.appendChild(pNombre);
        div.appendChild(pDesc);
        div.appendChild(pId);
        resultadosDOM.appendChild(div);
    } catch (error) {
        console.error(error);
        alert('Error al buscar el personaje. Por favor, inténtelo de nuevo más tarde.');
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);
});

