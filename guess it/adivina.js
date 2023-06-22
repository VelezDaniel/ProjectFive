const $ = (selector) => document.querySelector(selector);
const numero = $("numberInput").value;
const adivinar = Math.floor(Math.random() * 100);

const divMenor = $("div_menor");
const windowMenor = $("ventana1");
const divMajor = $("div_mayor");
const windowMajor = $("ventana2");
const btnVamos = $("btn-vamos");

//Contenedor del numero adivinado
let divAdivinado = $("adivinar");

function adivina() {
  let container1 = $("menor");
  let container2 = $("mayor");
  if (numero == adivinar) {
    adivinado();
  } else if (numero < adivinar) {
    container1.textContent = numero;
  } else {
    container2.textContent = numero;
  }
}

function adivinado() {
  let n = $("adivino");
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
