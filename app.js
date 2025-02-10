// Array para almacenar los nombres de amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Validar que el campo no este vacio
    if(nombreAmigo === "") {
        alert("Inserta un nombre.");
        return; //Detiene la ejecución de la función
    }

    // Validar que le nombre no se duplique
    if(amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya esta en la lista.`);
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";
    
    //Actualizar la lista en HTML
    actualizarLista();
}


//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra el contenido en el interior de la lista

    //Recorrer el array con un ciclo for
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion para seleccionar in amigo aleatorio
function sortearAmigo(){
    //Validar amigos disponibles
    if (amigos.length === 0) { //Comprueba si el array 'amigos' esta vacío
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un numero aleatorio

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre

    //MOstrar el resultado en HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
