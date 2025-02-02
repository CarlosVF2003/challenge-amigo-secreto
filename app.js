// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    if (amigo === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        limpiar('amigo');
        console.log(amigos);
        listaAmigos(); // Actualiza la lista de amigos después de agregar uno nuevo
    }
}

function limpiar(id) {
    document.getElementById(id).value = '';
}

function listaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function numeroAleatorio() {
    return Math.floor(Math.random() * amigos.length);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agregue algún nombre.');
    } else {
        let indice = numeroAleatorio();
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigos[indice]}`;
    }
}
