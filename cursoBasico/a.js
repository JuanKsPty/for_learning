function alcancia(Num = 0){
  let ahorrado = 0;
   return function sumado(){
       ahorrado  = ahorrado + Num
       return console.log(ahorrado)
  }
}