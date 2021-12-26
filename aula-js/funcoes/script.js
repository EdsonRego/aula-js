function soma1(num1, num2) {
    return num1 + num2;
}

const soma2 = function(num1, num2) {
    return num1 + num2;
}

const soma3 = (num1, num2) => {
    return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2;

//função que não tem retorno definido, por padrão, retorna undefinied

function mostrarPreco(preco) {
    console.log("Preço = " + preco);
}

//Variáveis definidas dentro do escopo, não vazam conteúdo para fora

function areaCirculo(raio) {
    pi = 3.1416;
    return pi * raio * raio;
}

//Function hoisting: Funções do JS são movidas para cima pelo motor do JS

function teste(x) {
    console.log("Teste = " + x);
}
teste(10);

//Funções de Alta Ordem: Funções podem ser passadas como argumento, também podem ser retornadas como retorno de funções

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("Resultado = " + result);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);