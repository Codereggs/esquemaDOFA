//Variables declaradas
let clickInicio = true;

/* Para activar el grid area pero no lo uso
    const activarGridArea = function (){
      cuadro1.style.gridArea = "miCuadrado";
      cuadro2.style.gridArea = "miCuadrado";
      cuadro3.style.gridArea = "miCuadrado";
      cuadro4.style.gridArea = "miCuadrado";
    }*/

const creciendoCuadro1 = function () {
  //Transformación del cuadro
  cuadro1.style.transform = "scale(1.8) translate(21%, 20%)";
  cuadro1.style.transition = "ease 0.5s transform";
  cuadro1.style.margin = "0 5%";
  cuadro1.style.border = "2px black solid";

  //Quitar hover al cuadro
  cuadro1.classList.remove("cuadroPequeño");

  //Efecto para los otros cuadros
  cuadro2.style.display = "none";
  cuadro3.style.display = "none";
  cuadro4.style.display = "none";
};
const decrecerCuadrado1 = function () {
  //Quitar las propiedades anteriores al cuadro
  cuadro1.style.transform = "none";
  cuadro1.style.margin = "0";
  cuadro1.style.border = "1px #333333 solid";

  //Añadir hover
  cuadro1.className += " cuadroPequeño";

  //Recuperar propiedades de los otros cuadros
  cuadro2.style.display = "initial";
  cuadro3.style.display = "initial";
  cuadro4.style.display = "initial";
};
const creciendoCuadro2 = function () {
  //Transformación del cuadro
  cuadro2.style.transform = "scale(1.8) translate(21%, 20%)";
  cuadro2.style.transition = "ease 0.5s transform";
  cuadro2.style.margin = "0 5%";
  cuadro2.style.border = "2px black solid";

  //Quitar hover al cuadro
  cuadro2.classList.remove("cuadroPequeño");

  //Efecto para los otros cuadros
  cuadro1.style.display = "none";
  cuadro3.style.display = "none";
  cuadro4.style.display = "none";
};
const decrecerCuadrado2 = function () {
  //Quitar las propiedades anteriores al cuadro
  cuadro2.style.transform = "none";
  cuadro2.style.margin = "0";
  cuadro2.style.border = "1px #333333 solid";

  //Añadir hover
  cuadro2.className += " cuadroPequeño";

  //Recuperar propiedades de los otros cuadros
  cuadro1.style.display = "initial";
  cuadro3.style.display = "initial";
  cuadro4.style.display = "initial";
};
const creciendoCuadro3 = function () {
  //Transformación del cuadro
  cuadro3.style.transform = "scale(1.8) translate(21%, 20%)";
  cuadro3.style.transition = "ease 0.5s transform";
  cuadro3.style.margin = "0 5%";
  cuadro3.style.border = "2px black solid";

  //Quitar hover al cuadro
  cuadro3.classList.remove("cuadroPequeño");

  //Efecto para los otros cuadros
  cuadro2.style.display = "none";
  cuadro1.style.display = "none";
  cuadro4.style.display = "none";
};
const decrecerCuadrado3 = function () {
  //Quitar las propiedades anteriores al cuadro
  cuadro3.style.transform = "none";
  cuadro3.style.margin = "0";
  cuadro3.style.border = "1px #333333 solid";

  //Añadimos el Hover
  cuadro3.className += " cuadroPequeño";

  //Recuperar propiedades de los otros cuadros
  cuadro2.style.display = "initial";
  cuadro1.style.display = "initial";
  cuadro4.style.display = "initial";
};
const creciendoCuadro4 = function () {
  //Transformación del cuadro
  cuadro4.style.transform = "scale(1.8) translate(21%, 20%)";
  cuadro4.style.transition = "ease 0.5s transform";
  cuadro4.style.margin = "0 5%";
  cuadro4.style.border = "2px black solid";

  //Quitar hover al cuadro
  cuadro4.classList.remove("cuadroPequeño");

  //Efecto para los otros cuadros
  cuadro3.style.display = "none";
  cuadro2.style.display = "none";
  cuadro1.style.display = "none";
};
const decrecerCuadrado4 = function () {
  //Quitar las propiedades anteriores al cuadro
  cuadro4.style.transform = "none";
  cuadro4.style.margin = "0";
  cuadro4.style.border = "1px #333333 solid";

  //Añadimos el Hover
  cuadro4.className += " cuadroPequeño";

  //Recuperar propiedades de los otros cuadros
  cuadro3.style.display = "initial";
  cuadro2.style.display = "initial";
  cuadro1.style.display = "initial";
};
// Acción
//Primer Cuadro
let cuadro1 = document.querySelector("#cuadro1");

cuadro1.addEventListener("click", function () {
  if (clickInicio) {
    creciendoCuadro1();
    clickInicio = false;
  } else {
    decrecerCuadrado1();
    clickInicio = true;
  }
});

//Segundo Cuadro
let cuadro2 = document.querySelector("#cuadro2");
cuadro2.addEventListener("click", function () {
  if (clickInicio) {
    creciendoCuadro2();
    clickInicio = false;
  } else {
    decrecerCuadrado2();
    clickInicio = true;
  }
});

//Tercer Cuadro
let cuadro3 = document.querySelector("#cuadro3");
cuadro3.addEventListener("click", function () {
  if (clickInicio) {
    creciendoCuadro3();
    clickInicio = false;
  } else {
    decrecerCuadrado3();
    clickInicio = true;
  }
});

//Cuarto Cuadro
let cuadro4 = document.querySelector("#cuadro4");
cuadro4.addEventListener("click", function () {
  if (clickInicio) {
    creciendoCuadro4();
    clickInicio = false;
  } else {
    decrecerCuadrado4();
    clickInicio = true;
  }
});
