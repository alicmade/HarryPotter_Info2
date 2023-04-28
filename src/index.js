'use strict'
ç/*
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

})*/
/*window.addEventListener('click',  obtenerDatosSWAPI);
let id = parseInt(document.getElementById('input-busqueda').value);
if (isNaN(id)) {
    alert('Debe ingresar un número válido');
}
function obtenerDatosSWAPI(){
    try {
        fetch('http://localhost:3000/personajes/ ' + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)

            })
    }catch (error) {
        console.error(error);
        alert('Error al buscar el personaje. Por favor, inténtelo de nuevo más tarde.');
    }
}*/

function buscarPersonaje2() {
    const nombrePersonaje = parseInt(document.getElementById("nombrePersonaje").value); // Obtener el nombre del personaje a buscar desde un input en el HTML
    const url = `http://localhost:3000/personajes/` + nombrePersonaje; // URL de la API con el parámetro de búsqueda

    fetch(url)
        .then((response) => response.json()) // Analizar la respuesta HTTP como JSON
        .then((data) => {
            // Aquí se puede trabajar con los datos obtenidos del servidor
            console.log(data); // Imprimir los datos en la consola para verificar que se hayan recibido correctamente
        })
        .catch((error) => {
            console.error(error); // Manejar cualquier error que se haya producido durante la petición
        });
}

function buscarPersonaje() {
    const id = parseInt(document.getElementById("input-busqueda").value);
    console.log("ID del personaje:", id);
    try {
        fetch(`http://localhost:3000/personajes/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Datos recibidos:", data);
                const resultados = document.getElementById("resultados");
                resultados.innerHTML = ""; // Limpiar el contenido anterior antes de agregar nuevos resultados

                // Iterar sobre los resultados y crear un elemento de lista para cada uno
                data.forEach(personaje => {
                    const a = document.createElement("a");
                    a.innerText = personaje.name;
                    let li = document.createElement("li")
                    li.appendChild(a)
                    resultados.appendChild(li)
                });

            })
    } catch (error) {
        console.error(error);
        alert('Error al buscar el personaje. Por favor, inténtelo de nuevo más tarde.');
    }
}

const botonBuscar = document.getElementById("buscar-btn");
botonBuscar.addEventListener("click", buscarPersonaje);

//function extraerPersonajes(data){

//}