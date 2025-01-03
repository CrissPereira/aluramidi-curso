
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//equanto
for( let contador = 0 ; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio= `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
