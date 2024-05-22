let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté


const btn = id('jugar');
const btn_pista = id('pista');
const imagen = id( 'imagen' );
let pista = id('pista_texto');
const btn_letras = document.querySelectorAll( "#letras button" );


/* click en iniciar juego */
btn.addEventListener('click', iniciar );
btn_pista.addEventListener('click', obtener_pista );
btn_pista.disabled = true;

function obtener_pista(event) {
    pista.style.visibility = 'visible';
    btn_pista.disabled = true;
    btn_pista.style.color = "brown";
}

function iniciar(event){
    btn_pista.disabled = false;
    btn_pista.style.color = "aliceblue";
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    btn.style.color = "rgb(49, 50, 252)";
    id('resultado').innerHTML = "";
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    let pista = id('pista_texto');
    pista.style.visibility = 'hidden';
    pista.innerHTML = palabrita.referencia;

    console.log( palabrita.palabra );
    const cant_letras = palabrita.palabra.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }
}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toUpperCase( );
    const palabra = palabrita.palabra.toUpperCase( ); // .toLowerCase( )

    let acerto = false;
    for( let i = 0; i < palabrita.palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita.palabra + ", Obten otra palabra";
        game_over( );
    }else if( cant_aciertos == palabrita.palabra.length ){
        id('resultado').innerHTML = "GANASTE!!";
        game_over( );
    }

}
/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }
    btn.disabled = false;
    btn.style.color = "aliceblue";
}

game_over( );