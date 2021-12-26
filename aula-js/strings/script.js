/*console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);
console.log(`Concatenação e Interpolação`);
const num = 14.5;
console.log("O valor do produto é: " + num);
console.log(`O valor do produto é: ` + num);
console.log(`O valor do produto é: ${num}`);

const num = 14.5;
console.log("Conversão entre número e String");

const str1 = num.toString();
console.log(`O tipo de ${str1}: ${typeof(str1)}`);

const str2 = num.toFixed(2);
console.log(`O tipo de ${str2}: ${typeof(str2)}`);

const num1 = Number(`14.5 `);
console.log(`O tipo de ${num1}: ${ typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`O tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`O tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`O tipo de ${num4}: ${typeof num4}`);
*/

const str = "Maria Silva  ";

console.log(`const str = "Maria Silva  "`);

console.log(`toLoweCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);
console.log(`String colchetes: ${str[3]}`);

console.log(`replace: ${str.replace("i","$")}`);
console.log(`replace todos, uso de expressão regular: ${str.replace(/i/g,"$")}`);

console.log(`length: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3,8)}`);

console.log(`trim: ${str.trim}`);

const data = "20/06/1972";
const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = 200.89;
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);