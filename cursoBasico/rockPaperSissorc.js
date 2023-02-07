//cambia la variable seleccionJugador con:
//1 para piedra, 2 para papel y 3 para tijeras

let seleccionJugador = 3;
let seleccionPc;

let jugador;
let pc;

function seleccion (player){ //retorna piedra/papel /tijeras dependieindo el numero
    switch(player){
        case 1:{return "piedra";
        break;}
        case 2:{return "papel";
        break;}
        default:{
        return "tijeras"
            
        }
    
    }}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

    seleccionPc = getRandomInt(1,4)
    
    pc = seleccion(seleccionPc)
    jugador = seleccion(seleccionJugador)

if (jugador == pc){
    console.log("empate")
} else if (jugador == "piedra" && pc == "tijeras"){
    console.log("ganaste")
} else if (jugador == "papel" && pc == "piedra"){
    console.log("ganaste")
} else if (jugador == "tijeras" && pc == "papel"){
    console.log("ganaste")
} else {console.log("perdiste")}
