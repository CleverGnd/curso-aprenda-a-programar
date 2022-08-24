// Entradas exercício: 
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

// verifica se o produto é internacional
if (produtoA['internacional'] == true) {
    console.log('O Produto', produtoA['nome'], 'é internacional e seu valor final é R$', (produtoA['valor'] * 1.2)); //calcula o valor do produto
} else {
    console.log('O Produto', produtoA['nome'], 'é nacional e seu valor final é R$', (produtoA['valor'] * 1.12)); //calcula o valor do produto
}
