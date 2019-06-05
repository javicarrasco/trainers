function mostrar() {
            div = document.getElementById('flotante');
            div.style.display = '';
        }

function mostrarIncorrecto() {
            div = document.getElementById('flotanteIncorrecto');
            div.style.display = '';
        }


function cerrar() {
            div = document.getElementById('flotante');
            div.style.display = 'none';
        }

function cerrarIncorrecto() {
            div = document.getElementById('flotanteIncorrecto');
            div.style.display = 'none';
        }

function resultado() {
        var p1;

        if (document.getElementById('p1').checked==true) {cerrarIncorrecto(), mostrar()}
        else {cerrar(), mostrarIncorrecto()}
        }




function mostrarB() {
        div = document.getElementById('flotanteB');
        div.style.display = '';
        }

function mostrarIncorrectoB() {
        div = document.getElementById('flotanteIncorrectoB');
        div.style.display = '';
        }


function cerrarB() {
        div = document.getElementById('flotanteB');
        div.style.display = 'none';
        }

function cerrarIncorrectoB() {
        div = document.getElementById('flotanteIncorrectoB');
        div.style.display = 'none';
        }

function resultadoB() {
        var b1;

        if (document.getElementById('b1').checked==true) {cerrarIncorrectoB(), mostrarB()}
        else {cerrarB(), mostrarIncorrectoB()}
        }
