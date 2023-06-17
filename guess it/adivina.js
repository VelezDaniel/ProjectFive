let numero = parseInt(document.getElementById("numberInput").value);
let adivinar = Math.floor(Math.random() * 100);

let divMenor = document.getElementById("div_menor");
let windowMenor = document.getElementById("ventana1");
let divMajor = document.getElementById("div_mayor");
let windowMajor = document.getElementById("ventana2");
let btnVamos = document.getElementById("btn-vamos");

//Contenedor del numero adivinado
let divAdivinado = document.getElementById("adivinar");

function adivina() {
  let container1 = document.getElementById("menor");
  let container2 = document.getElementById("mayor");
  if (numero == adivinar) {
    adivinado();
  } else if (numero < adivinar) {
    container1.textContent = numero;
  } else {
    container2.textContent = numero;
  }
}

function adivinado() {
  let n = document.getElementById("adivino");
  n.textContent = numero;
}

btnVamos.addEventListener("click", function () {
  adivina(numero);
});

//btnVamos.onclick(adivina());
// divMenor.addEventListener("click", function () {
//   windowMenor.style.display = "block";
//   let rect = divMenor.getBoundingClientRect();
//   windowMenor.style.top = rect.height + "px";
//   //windowMenor.style.top = rect.bottom + "px";
//   //windowMenor.style.left = rect.left + "px";
// });

/*
var divReferencia = document.getElementById("miDiv");
var ventanaTexto = document.getElementById("ventanaTexto");

divReferencia.addEventListener("click", function () {
  ventanaTexto.style.display = "block";
  var rect = divReferencia.getBoundingClientRect();
  ventanaTexto.style.top = rect.bottom + "px";
  ventanaTexto.style.left = rect.left + "px";
});
*/
