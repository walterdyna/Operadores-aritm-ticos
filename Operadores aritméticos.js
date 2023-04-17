//  Operadores aritméticos


//  +  -> Adição          ---  20+30
//  -  -> Subtração       ---  20-30
//  *  -> Multiplicação   ---  20*30
//  /  -> Divisão         ---  20/30
//  %  -> Resto
//  ++ -> Incremento
//  -- -> Decremento
//  ** -> Exponencial

console.log(7%3)    // Resultado e o resto da divisão
console.log(11%11)  // Conta sem resto no caso imprime zero (0)
console.log("-----------------------------------------------------------------------------")

//--------------------Operadores de Incremento--------------------
let incremento = 10 // neste caso o operador ++ ira colocar um numero a mais cada vez que for incrementado.
incremento++
incremento++
incremento++

console.log(incremento)

console.log(++incremento)

console.log("-----------------------------------------------------------------------------")

//--------------------Operadores de Decremento--------------------
let decremento = 10 // neste caso o operador ++ ira colocar um numero a mais cada vez que for incrementado.
decremento--
decremento--
decremento--

console.log(decremento)
console.log(--decremento)
console.log("-----------------------------------------------------------------------------")

//--------------------Operadores de Exponencial--------------------
let exponencial = 10
console.log(10**10)
console.log(Math.pow (10,10))

