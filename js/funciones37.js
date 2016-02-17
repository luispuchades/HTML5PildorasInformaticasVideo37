/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS XII
 * Origin: Video37.html ==> Animaciones en Canvas I
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;
var y;
var estado = "bajando";

//1.1 Extracción de elementos desde HTML y asignación de variables
elemento = document.getElementById('lienzo');
y = 300;

function animacion() {

    'use strict';

    var lienzo;

    // Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');

    if (y < 700 && estado === "bajando") {


        // Borramos el canvas
        lienzo.clearRect(0, 0, 1000, 700);
        // Creamos un trazado
        lienzo.beginPath();
        // Dibujamos una esfera
        lienzo.arc(500, y, 40, 0, Math.PI * 2, false);
        // La dibujamos rellena
        lienzo.fill();
        y = y + 50;
    }

    if (y === 700) {
        estado = "subiendo";
    }

    if (y > 300 && estado === "subiendo") {
        // Borramos el canvas
        lienzo.clearRect(0, 0, 1000, 700);
        // Creamos un trazado
        lienzo.beginPath();
        // Dibujamos una esfera
        lienzo.arc(500, y, 40, 0, Math.PI * 2, false);
        // La dibujamos rellena
        lienzo.fill();
        y = y - 50;
    }

    if (y === 300) {
        estado = "bajando";
    }


}


function comenzar() {
    'use strict';

    //Llamamos repetidamente a la función animacion()
    setInterval(animacion, 50);
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', comenzar, false);