/*
1 - Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve? Una variable es un dato almacenado en un espacio de la memoria. Sirve para almacenar datos para luego acceder a ellos.
¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es solo darle nombre a la variable e inicializar es darle un valor a la variable.
¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numeros e una operacion matematica y concatenar string seria el resultado de sumar uno o varios textos.
¿Cuál operador me permite sumar o concatenar?
+

2 -Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre: Juan //string
Apellido: Castillo // string
Nombre de usuario en Platzi: juanks //string
Edad: 17 //number
Correo electrónico ejemplo@gmail.com //string
Mayor de edad: no //boolean
Dinero ahorrado: 1k //number
Deudas: 5$ // number
*/
let Nombre = "Juan";
let  Apellido = "Castillo";
let  Nombre_de_usuario_en_Platzi = "juanks";
let  Edad = 17;
let  Correo_electrónico = "example@gmail.com"
let  Mayor_de_edad = false;
let  Dinero_ahorrado = 1000;
let  Deudas = 5;

let nombre_completo = Nombre + " " + Apellido;
console.log(nombre_completo);

let dineroReal = Dinero_ahorrado - Deudas;
console.log(dineroReal)

/*
Funciones 
1 - Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?: una funcion es un bloque de codigo que me permiten repetir ciertas acciones.
¿Cuándo me sirve usar una función en mi código?: cuando una parte de mi codigo se repite, para dividir mi codigo con diversos bloques para hacer mas facil su lectura
¿Cuál es la diferencia entre parámetros y argumentos de una función?: los parametros son las variables que se agrega a la funcion a la hora de declararla, mientras los argumentos son las variables que se le agregan a linvocar la funcion.
*/
function nombrar_usuario(name, lastName, nickname){
    return console.log( `Mi nombre es ${name} ${lastName}, pero prefiero que me digas ${nickname}.`);
}

/*
esponde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?: una condicional es una  funcion la que permite comparar varias situaciones.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? existen dos los if y los swich. Los if tienen else if y else, mientras que el swich tienen  ciertos casos y se le debe agregar un breake.
¿Puedo combinar funciones y condicionales?: si, y es util por ejemplo: si cierto valor es verdadero haz esta funcion, sino no la hagas.

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/
if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/*
Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo? un ciclo es una funcion de Js que nos permite repetir una accion.
¿Qué tipos de ciclos existen en JavaScript? el for y while.
¿Qué es un ciclo infinito y por qué es un problema? un ciclo infinito como su nombre lo dice es un ciclo que no acaba y es un problema porque al no acabar puede llegar a consumir muchos recursos.
¿Puedo mezclar ciclos y condicionales? : si se pueden mezclar
*/
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let i = 0
while (i < 5){
    console.log("El valor de i es: " + i);
    i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10
while (i >= 2){
    console.log("El valor de i es: " + i);
    i--
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.


let yes = true;
while(yes == true){
    let respuesta = prompt("¿Cuanto es 2 + 2?")
    if (respuesta == 4){       
        console.log("Felicitaciones sabes sumar")
        yes= false
    }
    else{
        console.log("Te dare otra oportunidad")
    }
}

/*
Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array? una array es una lista con distintos tipos de valores ya sean objetos o simples variables o strings.
¿Qué es un objeto? es un tipo de estructura de dato que permite darle diversas caracteristicas a una variable.
¿Cuándo es mejor usar objetos o arrays? las arrays es mejor usarlas para cuando es un conjunto de algo, los objetos es mejor uzarlos cuando se le quiere dar cararcteristicas a algo.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays? si se puede
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
*/
let frutas = ["apple","grapes","watermelon"]
función printFirstItem(array){
    print(array^[0])
}


///3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let frutas = ["apple","grapes","watermelon"]
function printFirstItem(array){
    array.forEach(element => {
        console.log(element)
    });
///4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

