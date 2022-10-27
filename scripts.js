// console.log('Hello World'); // Console.logo é uma função que exibe uma mensagem no console do navegador

// // objects

// const person = {
//     name: 'João',
//     idade: 20,
//     weight: 88.6,
//     isAdmin: true
// }

// console.log(`${person.name} tem ${person.idade} anos.`)

// // Arrays

// const animals = [
//     'Lion',
//     'Monkey',
//     {
//         name: 'Cat',
//         age: 3
//     }
    
// ]

// // acessar valores dentro do array

// console.log(animals[0]) // Lion

// console.log(animals.length) // mostra o tamanho do array

// console.log(animals[2].name) // Cat

//=================================================================================================

// var weight;
// console.log(typeof weight) // number typeof é uma função que mostra o tipo da variável


// let name= 'Solar System'
// let age = 47000000
// let stars = 84.0
// let isSubscribed = true

// let student = {
//     name: 'iri',
//     age: 50,
//     weight:  84.0,
//     isSubscribed: true,
// }

// console.log(typeof student) // object o typeof mostra o tipo da variável
// console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight}.`)

// let students = [

// ]

// students = [
//     student
// ]

// console.log(students)

// console.log(students[0])

// const john = {
//     name: 'John',
//     age: 23,
//     weight: 83.5,
//     isSubscribed: true
// }

// students = [
//     student,
//     john
// ]
// console.log(students)

// // Exercícios

// // 9. Sem rodar o código, responda qual será o valor impresso no console e por que? Após sua resposta, rode o código e veja se você acertou.
/* console.log(a)
var a = 1 
resposta: undefined. O hoisting eleva a variável para o topo do código, mas não atribui valor.*/

//========================================================================================================

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    * 
*/

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

// console.log('9' + 5) // 95
// console.log(Number('9') + 5) // 14



// Manipulando Strings e Números

// Transformar String em Número e Número em String

// let string = '123'
// console.log(Number(string))

// let number = 321
// console.log(String(number))

//----------------------------------------------------------------------------------------------------

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

// let word = 'Paralelepípedo'
// console.log(word.length) // a propriedade length conta a quantidade de caracteres

// let number = 1234
// console.log(String(number).length) // a função String transforma o número em string e depois conta os caracteres

//----------------------------------------------------------------------------------------------------

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 453557.125445
// console.log(number.toFixed(2).replace('.', ','))     // a função toFixed arredonda o número para o número de casas decimais que você colocar entre os parênteses/ a função replace substitui o ponto por vírgula .replace('.', ',')

//----------------------------------------------------------------------------------------------------

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

// let word = 'Programar é muito bacana!'
// console.log(word.toUpperCase()) // a função toUpperCase transforma as letras em maiúsculas
// console.log(word.toLowerCase()) // a função toLowerCase transforma as letras em minúsculas

//----------------------------------------------------------------------------------------------------

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

// let phrase = 'Eu quero viver o Amor!'
// let myArray = phrase.split(' ') // a função split separa o texto em um array
// let phraseWithUnderscore = myArray.join('_') // a função join junta o array em um texto e substitui o espaço por _

// console.log(phrase)
// console.log(myArray)
// console.log(phraseWithUnderscore)
// console.log(phraseWithUnderscore.toLowerCase())
// console.log(phraseWithUnderscore.toUpperCase())
// toLowerCase()
// toUperCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// toLOwerCase()
// toUpperCase()
// toLowerCase()
// toLowerCase()
// toUpperCase()
// toLowerCase()
// toUpperCase()
// .split()
// .split()
// .join()
// .join()
// .split()
// .join()
// .split()
// .join()

//----------------------------------------------------------------------------------------------------

// Verificar se o texto contém a palavra Amor

// let phrase = 'Eu quero viver o Amor!'
// console.log(phrase.includes('Amor')) // a função includes verifica se o texto contém a palavra Amor
// let phrase1 = 'Eu quero viver!'
// console.log(phrase1.includes('Amor')) // a função includes verifica se o texto contém a palavra Amor

//----------------------------------------------------------------------------------------------------

// Criar Array com construtor

// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

//----------------------------------------------------------------------------------------------------

// Contar elementos de um array

// console.log(['a', 'b', 'c'].length)
// console.log([
//     'a',
//     {type: 'array'},
//     function() {return 'alo'}
// ][2]())
// console.log([
//     'a',
//     {type: 'array'},
//     function() {return 'alo'}
// ][1].type
// )

//----------------------------------------------------------------------------------------------------

// Transformar uma cadeia de caracteres em elementos de um array

// let word = 'manipulação'
// console.log(Array.from(word)) // a função Array.from transforma a string em um array

//----------------------------------------------------------------------------------------------------

// Manipulando Arrays

// let techs = ['html', 'css', 'js']
// console.log(techs)
// // adicionar um item no fim
// techs.push('nodejs') // a função push adiciona um item no fim do array
// console.log(techs) // [ 'html', 'css', 'js', 'nodejs' ]
// // adicionar um item no começo
// techs.unshift('sql') // a função unshift adiciona um item no começo do array
// console.log(techs) // [ 'sql', 'html', 'css', 'js', 'nodejs' ]
// // remover do fim
// techs.pop() // a função pop remove o último item do array
// console.log(techs) // [ 'sql', 'html', 'css', 'js' ]
// // remover do começo
// techs.shift() // a função shift remove o primeiro item do array
// console.log(techs) // [ 'html', 'css', 'js' ]
// // pegar somente alguns elementos do array
// console.log(techs.slice(1, 3)) // [ 'css', 'js' ] // a função slice pega os elementos do array de acordo com o índice que você colocar entre os parênteses
// // remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 1) // a função splice remove os itens do array de acordo com o índice que você colocar entre os parênteses
// console.log(techs) // [ 'html', 'js' ]
// // encontrar a posição de um elemento no arrayy
// let index = techs.indexOf('js') // a função indexOf verifica a posição do elemento no array
// console.log(index) // 1

//----------------------------------------------------------------------------------------------------

/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

// exemplo de ; 

// let number = 1; 

// (function alo() {
//     console.log('alo')	
// })()

//exemplo de binario
// let number = 1
// console.log(number + 1) // binario porque precisa de dois valores para fazer a soma.
// //exemplo de unario
// console.log(++number) // adicão
// console.log(--number) // subtracão
// console.log(typeof number)
// //exemplo de ternario
// console.log(false ? 'alo' : 'nada') 

//----------------------------------------------------------------------------------------------------  

/*
    new

    * left-hand-side expression
    * criar um novo objeto
    * exemplo: let name = new String('name')
    * exemplo: let date = new Date('2020-12-01')
*/

// let name = new String('Irineu')
// let age = new Number(25)
// console.log(name, age)
// let data = new Date('2022-12-30')
// console.log(data)

//----------------------------------------------------------------------------------------------------

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

// let one = 1
// let two = 2

// // == igualdade (valor)
// console.log(one == 1) // true
// console.log(two ==1) // false	
// console.log(one == "1") // true

// // != diferente (valor)
// console.log(one != two) // true
// console.log(one != 1) // false
// console.log(one != "1") // false

// === estritamente igual (valor e tipo) // a diferença entre o == e o === é que o == compara apenas o valor e o === compara o valor e o tipo
// console.log(one === 1) // true
// console.log(one === "1") // false

// !== estritamente diferente (valor e tipo)

// console.log(two !== "2") // true
// console.log(two !== 2) // false
// console.log(one !== two) // true
// console.log(one !== 1) // false

// > maior que
// console.log(one > two) // false

// // >= maior que ou igual a
// console.log(one >= 1) // true
// console.log(two >= 1) // true

// // < menor que
// console.log(one < two) // true

// // <= menor que ou igual a
// console.log(one <= two) // true
// console.log(one <= 1) // true
// console.log(one <= 0) // false

//----------------------------------------------------------------------------------------------------

// Operadores de atribuição (Assignment)

// let x

// console.log(x)

// // assignment
// x = 1
// console.log(x)

// // addition assignment
// x += 2 // x = x + 2 // 3
// console.log(x)

// // subtraction assignment
// x -= 1 // x = x - 1 // 2
// console.log(x)

// // multiplication assignment
// x *= 2 // x = x * 2 // 4
// console.log(x)

// // division assignment  
// x /= 2 // x = x / 2 // 2
// console.log(x)

// // remainder, exponetiation
// x %= 2 // x = x % 2 // 0
// console.log(x)
// x **= 2 // x = x ** 2 // 0
// console.log(x)

