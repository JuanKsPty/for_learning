

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
let tipoDeSuscripcion = "Basic";

let suscripciones ={
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
    let arrat = Object.keys(suscripciones)
    let arratValues = Object.values(suscripciones)

    function select(type,keys,values){
        for (let index = 0; index < keys.length; index++) {
            if (type == keys[index]){
                console.log(values[index])
            }

    
    }
}

if (tipoDeSuscripcion in suscripciones){
    
}
