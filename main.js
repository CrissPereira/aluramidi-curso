
function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio'){
   elemento.play();
   }
   else {
    alert('Elemento não encontrado!!');
   }
}

let contador = 0;

function incrementarContador(){
    contador = contador +1;
    console.log("Contador:" + contador);
    numero.value =(contador) ;

}
const numero = document.querySelector('input[type="number"]');
const ListaDeTeclas = document.querySelectorAll('.tecla');

//equanto
for( let contador = 0 ; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio= `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
        incrementarContador();  
    }

    tecla.onkeydown = function(evento) {

        if(evento.code ==='Enter' || evento.code ==='Space') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
