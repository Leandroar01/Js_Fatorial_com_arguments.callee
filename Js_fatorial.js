function fatorial (n){
    if (n ==0){return 1}
    return n*arguments.callee(n-1); //chamada de uma funcao anonima dentro de si mesma
    
    
}