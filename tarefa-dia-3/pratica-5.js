let receita = [
    {'valor': 87, 'gorjeta': 8.7},
    {'valor': 405, 'gorjeta': 40.5},
    {'valor': 695, 'gorjeta': 69.5},
    {'valor': 189, 'gorjeta': 18.9},
    {'valor': 204, 'gorjeta': 20.4},
    {'valor': 948, 'gorjeta': 94.8},
    {'valor': 763, 'gorjeta': 76.3},
    {'valor': 196, 'gorjeta': 19.6},
    {'valor': 993, 'gorjeta': 99.3},
    {'valor': 878, 'gorjeta': 87.8},
    {'valor': 349, 'gorjeta': 34.9},
    {'valor': 856, 'gorjeta': 85.6},
    {'valor': 543, 'gorjeta': 54.3},
    {'valor': 56, 'gorjeta': 5.6},
    {'valor': 904, 'gorjeta': 90.4},
    {'valor': 249, 'gorjeta': 24.9},
    {'valor': 945, 'gorjeta': 94.5},
    {'valor': 475, 'gorjeta': 47.5},
    {'valor': 505, 'gorjeta': 50.5},
    {'valor': 437, 'gorjeta': 43.7},
    {'valor': 382, 'gorjeta': 38.2},
    {'valor': 914, 'gorjeta': 91.4},
    {'valor': 239, 'gorjeta': 23.9},
    {'valor': 624, 'gorjeta': 62.4},
    {'valor': 688, 'gorjeta': 68.8},
    {'valor': 483, 'gorjeta': 48.3},
    {'valor': 224, 'gorjeta': 22.4},
    {'valor': 78, 'gorjeta': 7.8},
    {'valor': 355, 'gorjeta': 35.5},
    {'valor': 314, 'gorjeta': 31.4},
    {'valor': 808, 'gorjeta': 80.8},
    {'valor': 614, 'gorjeta': 61.4},
    {'valor': 472, 'gorjeta': 47.2},
    {'valor': 192, 'gorjeta': 19.2},
    {'valor': 460, 'gorjeta': 46},
    {'valor': 616, 'gorjeta': 61.6},
    {'valor': 844, 'gorjeta': 84.4},
    {'valor': 23, 'gorjeta': 2.3},
    {'valor': 552, 'gorjeta': 55.2},
    {'valor': 687, 'gorjeta': 68.7},
    {'valor': 328, 'gorjeta': 32.8},
    {'valor': 389, 'gorjeta': 38.9},
    {'valor': 508, 'gorjeta': 50.8},
    {'valor': 1, 'gorjeta': 0.1},
    {'valor': 482, 'gorjeta': 48.2},
    {'valor': 326, 'gorjeta': 32.6},
    {'valor': 795, 'gorjeta': 79.5},
    {'valor': 370, 'gorjeta': 37},
    {'valor': 777, 'gorjeta': 77.7},
    {'valor': 678, 'gorjeta': 67.8},
    {'valor': 823, 'gorjeta': 82.3},
    {'valor': 828, 'gorjeta': 82.8},
    {'valor': 941, 'gorjeta': 94.1},
    {'valor': 17, 'gorjeta': 1.7},
    {'valor': 119, 'gorjeta': 11.9},
    {'valor': 273, 'gorjeta': 27.3},
    {'valor': 491, 'gorjeta': 49.1},
    {'valor': 194, 'gorjeta': 19.4},
    {'valor': 65, 'gorjeta': 6.5},
    {'valor': 342, 'gorjeta': 34.2},
    {'valor': 156, 'gorjeta': 15.6},
    {'valor': 27, 'gorjeta': 2.7},
    {'valor': 88, 'gorjeta': 8.8},
    {'valor': 217, 'gorjeta': 21.7},
    {'valor': 668, 'gorjeta': 66.8},
    {'valor': 498, 'gorjeta': 49.8},
    {'valor': 428, 'gorjeta': 42.8},
    {'valor': 511, 'gorjeta': 51.1},
    {'valor': 365, 'gorjeta': 36.5},
    {'valor': 106, 'gorjeta': 10.6},
    {'valor': 523, 'gorjeta': 52.3},
    {'valor': 730, 'gorjeta': 73},
    {'valor': 153, 'gorjeta': 15.3},
    {'valor': 707, 'gorjeta': 70.7},
    {'valor': 602, 'gorjeta': 60.2},
    {'valor': 59, 'gorjeta': 5.9},
    {'valor': 623, 'gorjeta': 62.3},
    {'valor': 228, 'gorjeta': 22.8},
    {'valor': 296, 'gorjeta': 29.6},
    {'valor': 386, 'gorjeta': 38.6},
    {'valor': 568, 'gorjeta': 56.8},
    {'valor': 168, 'gorjeta': 16.8},
    {'valor': 949, 'gorjeta': 94.9},
    {'valor': 544, 'gorjeta': 54.4},
    {'valor': 679, 'gorjeta': 67.9},
    {'valor': 662, 'gorjeta': 66.2},
    {'valor': 839, 'gorjeta': 83.9},
    {'valor': 720, 'gorjeta': 72},
    {'valor': 971, 'gorjeta': 97.1},
    {'valor': 211, 'gorjeta': 21.1},
    {'valor': 709, 'gorjeta': 70.9},
    {'valor': 867, 'gorjeta': 86.7},
    {'valor': 355, 'gorjeta': 35.5},
    {'valor': 868, 'gorjeta': 86.8},
    {'valor': 830, 'gorjeta': 83},
    {'valor': 729, 'gorjeta': 72.9},
    {'valor': 809, 'gorjeta': 80.9},
    {'valor': 801, 'gorjeta': 80.1},
    {'valor': 344, 'gorjeta': 34.4},
    {'valor': 809, 'gorjeta': 80.9}
]

/* PROBLEMA 1: Qual o valor total de vendas sem gorjeta? --------------------- */
//COLOQUE SUA SOLUÇÃO AQUI
soma1 = 0
i = 0

for (var i in receita) { 
    soma1 = soma1 + receita[i].valor;
 }
const valor1 = soma1.toFixed(2);
console.log(`O valor total de ventas sem gorjete é R$ ${valor1}.`)

/* ----------------------------------------------------------------------------- */

/* PROBLEMA 2: Qual o valor total de vendas incluindo a gorjeta? --------------- */
//COLOQUE SUA SOLUÇÃO AQUI
soma2 = 0
i = 0

for (var i in receita) {
    soma2 = soma2 + receita[i].valor + receita[i].gorjeta;
 }
const valor2 = soma2.toFixed(2);
console.log(`O valor total de ventas com gorjete é R$ ${valor2}.`)

/* ----------------------------------------------------------------------------- */

/* PROBLEMA 3: Quantas vendas foram abaixo de 50 reais? ----------------------- */
//COLOQUE SUA SOLUÇÃO AQUI
venda = 0
i = 0
menor50 = 0
controle = 50

for (var i in receita) {
    venda = receita[i].valor + receita[i].gorjeta;
        if (venda < controle) {
            menor50 ++
        } 
 }
console.log(`Foram realizadas ${menor50} vendas abaixo de R$ ${controle}.`)

/* ----------------------------------------------------------------------------- */