
const inputPiedra = document.getElementById('piedra');
const inputPapel = document.getElementById('papel');
const inputTijeras = document.querySelector('#tijeras');
const btn = document.querySelector("button");

const contenedorJugador = document.querySelector('.columnaJugador div');
let selectedValueFinal;
let seleccionPc;
let jugador;
let pc;
let resultado;

inputPiedra.addEventListener("click",onClickPiedra);

function onClickPiedra(){
    //onsole.log("piedra")
    selectedValueFinal = "piedra"
}

inputPapel.addEventListener("click",onClickPapel);

function onClickPapel(){
    //console.log("papel")
    selectedValueFinal = "papel"
    
}
inputTijeras.addEventListener("click",onClickTijeras)

function onClickTijeras(){
    selectedValueFinal = "tijeras"
}

function seleccion (player){ 
    let selected
    switch(player){
        case 1:
            selected="piedra";
            break;
        case 2:
            selected="papel";
            break;
        default:
            selected= "tijeras"            
    }
    return selected
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function dediced(){
    if (jugador == pc){
        resultado = "empate";
        console.log("empate")
    } else if (jugador == "piedra" && pc == "tijeras"){
        console.log("ganaste")
        resultado = "ganaste"
    } else if (jugador == "papel" && pc == "piedra"){
        resultado = "ganaste"
        console.log("ganaste")
    } else if (jugador == "tijeras" && pc == "papel"){
        console.log("ganaste")
        resultado = "ganaste"
    } else {
        console.log("perdiste")
        resultado = "perdiste"
    }
    return resultado
}

function start(){    
    seleccionPc = getRandomInt(1,4);
    pc = seleccion(seleccionPc)
    console.log("pc esligio "+ pc)
    jugador = selectedValueFinal
    console.log("jugador esligio "+ jugador)
    console.log(dediced())
}

btn.addEventListener("click",start)