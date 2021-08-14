// Funcion para tener numeros aleatorios entre el 0 y el 7
function retornaNumeros(){
    var numero = Math.round(Math.random()*imagenes.length);
    while(numero > 16){
        numero = Math.round(Math.random()*imagenes.length);
    }
    return numero;
}
// Otra forma de devolver un array random
/* Aqui lo que hacen es pasarle al array el mestodo sort() con una funcion como parametro que "organice" la funcion numericamento, lo que uno de los parametros es Math.floor(Math.random()*array.length) y el orto puede ser cualquier numero */
var lista = [1,2,3,4,5,6,7,8,9];
lista = lista.sort(function() {return Math.floor(Math.random()*lista.length) - 2});
console.log(lista); // imprime por ejemplo: 7,9,1,5,2,3,6,4,8

// Voy a crear un array con numeros randoms
var cantidadNumeros = 16;
var myArray = []
while(myArray.length < cantidadNumeros ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<myArray.length;i++){
	if(myArray [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    myArray[myArray.length] = numeroAleatorio;
  }

}

// funcion global para ver si hay algun par igual (Esta funcion utiliza el evento overmouse="buscarIgual()")
function buscarIgual(){
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
      if (tempIguales[i+1] === almacenIguales[i]) {
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