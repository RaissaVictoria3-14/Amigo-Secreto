//Variables
let amigos = [];
let amigosSorteados = [];
let timeoutId = 0;

// Agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();
   
    if (nombre === '') {
        alert('Por favor, ingresar un nombre válido');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = '';
    
    actualizarListaAmigos();
}

// Actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        listaAmigos.appendChild(li);
    });
}

// Sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agregue al menos un amigo para realizar el sorteo');
        return;
    }
        if (amigosSorteados.length === amigos.length) {
        amigosSorteados = [];
    }
    
    let amigosDisponibles = amigos.filter(amigo => !amigosSorteados.includes(amigo));
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let amigoSeleccionado = amigosDisponibles[indiceAleatorio];
    
    amigosSorteados.push(amigoSeleccionado);
    mostrarResultado(amigoSeleccionado);
}

// Resultado del sorteo
function mostrarResultado(amigo) {
    let resultado = document.getElementById('resultado');
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigo}</li>`;
    
    //Ocultar el resultado
    timeoutId = setTimeout(() => {
        resultado.innerHTML = '';
    }, 2000);
}
