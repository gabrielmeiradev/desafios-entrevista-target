function checkPerfectSquare(n){
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function belongsFibonacci(num){
    // Um número pertence à sequência Fibonacci se (5*num^2 +- 4) é um quadrado perfeito
    return checkPerfectSquare(5*num**2 + 4) ||
    checkPerfectSquare(5*num**2 - 4) 
}