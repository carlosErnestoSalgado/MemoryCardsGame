var nodosDivs = document.getElementsByTagName('div');
var imagenes = [undefined, 'Img/beard-1781443_640.png', 'Img/bird-2069828_640.png', 'Img/grooming-1801287_640.png', 'Img/hand-print-1751319_640.png', 'Img/infinity-1837436_640.png', 'Img/vintage-1781619_640.png', 'Img/witch-1751025_640.png', 'Img/woman-1801312_640.png', 'Img/bird-2069828_640.png', 'Img/grooming-1801287_640.png', 'Img/hand-print-1751319_640.png', 'Img/infinity-1837436_640.png', 'Img/vintage-1781619_640.png', 'Img/witch-1751025_640.png', 'Img/woman-1801312_640.png', 'Img/beard-1781443_640.png']

// Voy a crear un array con numeros randoms
var cantidadNumeros = 16;
var myArray = []
while (myArray.length < cantidadNumeros) {
    var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
    var existe = false;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == numeroAleatorio) {
            existe = true;
            break;
        }
    }
    if (!existe) {
        myArray[myArray.length] = numeroAleatorio;
    }

}

// Poner ls src randon
var imagenesSrc = document.getElementsByTagName('img');
for (let i = 0; i < imagenesSrc.length; i++) {
    imagenesSrc[i].src = imagenes[myArray[i]];
}




// Mostrar
var contador = 0;
function mostrar(clase) {
    var cantidadDeBloquesArriba = 0;
    for (let i = 1; i < nodosDivs.length; i++) {
        if (nodosDivs[i].firstChild.className == 'deFrente') {
            cantidadDeBloquesArriba++;
        }
    }
    if (cantidadDeBloquesArriba >= 2) {
        for (let i = 1; i < nodosDivs.length; i++) {
            nodosDivs[i].firstChild.style = 'display: none';
            nodosDivs[i].firstChild.className = 'deEspalda'
        }
    }
    contador++;
    var elemento = document.getElementsByClassName(clase)[0];
    if (contador % 2 == 0) {
        elemento.firstChild.style = 'display: none';
        elemento.firstChild.className = 'deEspalda';
    } else {
        elemento.firstChild.style = 'display: block';
        elemento.firstChild.className = 'deFrente';
    }

    // Funciones para Comprobar las imagenes iguales

    // Almacenando las imagenes viradas
    var almacenIguales = [];
    for (let i = 1; i < nodosDivs.length; i++) {
        if (nodosDivs[i].firstChild.className == 'deFrente') {
            almacenIguales.push(nodosDivs[i].firstChild.src)
        }
    }
    // Metodo que devuelve True si hay elementos repetidos en el array almacenIguales
    var tempIguales = [...almacenIguales];
    var iguales = false;
    for (let i = 0; i < tempIguales.length; i++) {
        if (tempIguales[i + 1] === almacenIguales[i]) {
            iguales = true;
        }
    }
    // Si los numeros almacenads en el array son iguales voy a poner las celdas que esten boca arriba con color de fondo negro para no verlas y eliminare la imagen poniendo su atributo src vacio.
    if (iguales === true) {
        for (let i = 1; i < nodosDivs.length; i++) {
            if (nodosDivs[i].firstChild.className == 'deFrente') {
                nodosDivs[i].style = 'background-color: var(--Color-Fondo)'
                nodosDivs[i].firstChild.src = '';
            }
        }
    }
    // Pregunto si las 16 imagenes tienen el src vacio para decirle al jugador que gano el juego.
    var sourcesVacios = 0;
    for (let i = 1; i < nodosDivs.length; i++) {
        if (nodosDivs[i].firstChild.src == 'file:///E:/Tele/2do%20A%C3%B1o/Primer%20Semestre/Optativa%20II/Python/Desarrollo_Web/Proyectos/Proyecto_1/index.html') {
            sourcesVacios++;
        }
    }
    if (sourcesVacios == 16) {
        document.getElementsByClassName('container')[0].style = 'display: flex; justifyContent: center; alingItems: center;'
        document.getElementsByClassName('container')[0].innerHTML = '<h1>CONGRATULATION, YOU ARE WINNER</h1>';
    }
}

// Funcion para reiniciar el juego

function reset() {
    var respuesta = confirm('Desea reiniciar la partida, perdera los avances logrados');
    if (respuesta === true) {
        window.location.reload();
    }

}
// Modo claro/oscuro
var encendido = 0
function activarModo() {
    encendido++;
    if (encendido % 2 == 0) {
        document.getElementsByTagName('i')[0].className = 'fas fa-moon';
        document.getElementsByTagName('i')[0].title = 'Dark Mode';
        // Aplico la paleta oscura 
        document.documentElement.style.setProperty('--Color-Celdas', '#ff2d52');
        document.documentElement.style.setProperty('--Color-Boton', '#ff7834');
        document.documentElement.style.setProperty('--Color-Boton-hover', '#ffc24c');
        document.documentElement.style.setProperty('--Color-Texto', '#192207');
        document.documentElement.style.setProperty('--Color-Fondo', '#effed3');
        document.documentElement.style.setProperty('--Color-Icono', '#ACAFA5');
    } else {
        document.getElementsByTagName('i')[0].className = 'fas fa-sun';
        document.getElementsByTagName('i')[0].title = 'Sun Mode';
        document.documentElement.style.setProperty('--Color-Celdas', '#fffb49');
        document.documentElement.style.setProperty('--Color-Boton', '#b0ff47');
        document.documentElement.style.setProperty('--Color-Boton-hover', '#878678');
        document.documentElement.style.setProperty('--Color-Texto', '#fffaf2');
        document.documentElement.style.setProperty('--Color-Fondo', '#192207');
        document.documentElement.style.setProperty('--Color-Icono', '#ffc24c');
    }
}




