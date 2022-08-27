let n = 2 // É um número primo?
let cont = 2
let divzero = 1

while (cont <= n) {
    if (n % cont == 0) { //Verifica quantas divisões são possíveis 
        cont ++
        divzero ++
    }
    else {
        cont ++
    }
}

if (divzero == 2) { //Caso somente ocorram 2 divisões o valor é primo
    console.log(`Sim, o número ${n} é primo.`)
}
else { //Caso contrario o valor não é primo
    console.log(`Não, o número ${n} não é primo.`)
}
