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

//----------------------------------------------------------------------------------------------------

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso
// resultará em verdadeiro ou falso

// let pao = true
// let queijo = false

// // AND &&
// console.log(pao && queijo) // true

// // OR ||
// console.log(pao || queijo) // true

// // NOT !
// console.log(!pao) // false

//----------------------------------------------------------------------------------------------------

// Operadores Condicionais (Ternary)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
// let pao = true
// let queijo = true

// const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim' // && significa que os dois valores tem que ser verdadeiros para que o resultado seja verdadeiro, || significa que um dos valores tem que ser verdadeiro para que o resultado seja verdadeiro, ! significa que o valor tem que ser falso para que o resultado seja verdadeiro ou vice-versa

// console.log(niceBreakfast)


// Maior de 18

// let age = 19
// const canDrive = age >= 18 ? 'can drive' : "can't drive"
// console.log(canDrive)

//----------------------------------------------------------------------------------------------------

// Operadores de String (String operator)

// comparison (comparação)  
// console.log('a' == 'b') // false
// console.log('a' == 'a') // true

// // concatenation (concatenação)
// // Retorna a união de duas Strings
// console.log('á' + 'é') // áé

//----------------------------------------------------------------------------------------------------

/*
    Type conversion (typecasting) vs Type coersion
*/
// console.log('9' + 5) // 95  // type coersion
// console.log(Number('9') + 5) // 14 // type conversion

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)  

    false
    0
    -0
    ""
    null
    undefined   
    NaN 
*/

// console.log( false ? 'verdadeiro' : 'falso') // falso

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity


*/

// console.log( true ? 'verdadeiro' : 'falso') // verdadeiro

//----------------------------------------------------------------------------------------------------  

/*
    Operator precedence 
        Precedência de operadores

    * grouping                     ( )
    * negação e incremento         ! ++ --
    * multiplicação e divisão      * /
    * adição e subtração           + -
    * relacional                   < <= > >=
    * igualdade                    == != === !==
    * AND                          &&
    * OR                           ||
    * condicional                  ?:
    * assignment (atribuição)      = += -= *=   
*/

// console.log( 2 + 5 * 10) // 52

//----------------------------------------------------------------------------------------------------

// Control flow 

// se estiiver sujo
//console.log('lavar o copo')

// sen não estiver sujo
//console.log('servir café')  


//----------------------------------------------------------------------------------------------------

// if...else

// let temperature = 36.5
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// }else {
//     console.log('Saudável')
// }

//----------------------------------------------------------------------------------------------------

// switch // switch é uma forma de fazer uma estrutura de condição

// let expression = 'a'

// switch(expression) {

//     case 'a':

//         // código aqui

//         console.log('a')

//         break

//     case 'b':

//         // código aqui

//         console.log('b')

//         break

//     default:

//         console.log('default')

//         break

// }

// function calculate(number1, operator, number2){
//     let result = 0

//     switch(operator){
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2
//             break
//         case '*':
//             result = number1 * number2
//             break
//         case '/':
//             result = number1 / number2
//             break
//         default:
//             console.log('não implementado')
//             break
//     }

//     return result
// }

//----------------------------------------------------------------------------------------------------

// throw // lançar um erro

// function sayMyName(name = '') {
//     if(name === '') {
//         throw 'Error: Nome é obrigatório.'
//     }

//     console.log(`Bem-vindo ${name}`)
// }

// // try...catch // tentar...capturar
// try  {
//     sayMyName('Irineu') 
// } catch(e) {
//     console.log(e)
// }

//----------------------------------------------------------------------------------------------------

// Estruturas de repetição
// for

// for(let i = 0; i < 10; i++) {
//     console.log(i) // Enquanto 'i' for menor que '10' faca i++/ i= i+i (adiciona 1 a cada repetição)
// }

// for(let i = 100; i > 0; i--) {
//      // Enquanto 'i' for maior que '0' faca i--/ i= i-i (subtraia 1 a cada repetição)
//     if(i==50){
//         console.log(Number(i).toFixed().replace('50', '50')) // toFixed() arredonda o número, replace substitui o valor
//         // break // break para a repetição
//         continue // continue pula a repetição atual e vai para a próxima
//     }
//     console.log(i) // DEIXAR SEMPRE NO FINAL
// }
// console.log('FIM')

// while
// let i = 0
// while(i <= 10) {
//     console.log(i)
//     i++

//     // console.log('Olá')
// }  //while (enquanto) infinito

// for...of
// let name = 'Irineu'
// let names = ['João', 'Paulo', 'Pedro']

// for(let char of name){
//     console.log(char)	
// }

// for(let elemests of names){
//     console.log(elemests)
// }

// for...in

// let person = {
//     name: 'Irineu',
//     age: 30,
//     weight: 88.6
// }

// for (let property in person) {
//     console.log(property)
//     console.log(person[property])
// }

/*


    Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível.


*/

/*  ### Transformar notas escolares

crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 - 89  -  B
* entre 70 - 79  -  C
* entre 60 - 69  -  D
* menor que 60   -  F

*/

// Tambem pode ser assim 'let gradesA = grade >= 90 && grade <= 100

// function getGrade(grade){
//     //let grade = 100
//     let gradesA = 90
//     let gradesB = 80
//     let gradesC = 70
//     let gradesD = 60

//     if  (grade >= gradesA) {
//         console.log("A")
//     } else if (grade >= gradesB) {
//         console.log("B")
//     } else if(grade >= gradesC) {
//         console.log("C")
//     } else if(grade >= gradesD) {
//         console.log("D")
//     } else {
//         console.log("F")
//     }
// } // My solution

// getGrade(100)

// function getScore(score) {


// function getScore(score) {
//     scoreA = score >=90 && score <= 100
//     scoreB = score >=80 && score <= 89
//     scoreC = score >= 70 && score <= 79
//     scoreD = score >= 60 && score <= 69
//     scoreF = score < 60 && score >= 0

//     let finalScore;

//     if (scoreA) {
//         finalScore = 'A'
//     } else if(scoreB) {
//         finalScore = 'B'
//     }else if(scoreC) {
//         finalScore = 'C'
//     } else if(scoreD) {
//         finalScore = 'D'
//     } else if(scoreF) {
//         finalScore = 'F'
//     } else {
//         finalScore = 'Nota inválida'
//     }

//     return finalScore
// }

// console.log(getScore(-1)) // Other solution


/*  ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/
// let family ={
//     incomes: [2500, 3500, 250.43, 360.45],
//     expenses: [200,500, 100, 150, 1200.00]
// }

// function sum(array) {
//     let total = 0
    
//     for (let values of array) {
//         total += values
//     }
//     return total
// }

// function calculateBalance() {
//     const calculateIncomes = sum(family.incomes) 
//     const calculateExpenses = sum(family.expenses)

//     const total = calculateIncomes - calculateExpenses
//     const itsOk = total >= 0 

//     let balanceText = "negativo"

//     if( itsOk ) {
//         balanceText = "positivo"
//     }

//     console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
// }

// calculateBalance()


/* ### Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// function transForm(degree) {
//     const celsiusExists = degree.toUpperCase().includes('C')    
//     const fahrenheitExists = degree.toUpperCase().includes('F')

//     // fluxo de erro
//     if(!celsiusExists && !fahrenheitExists){
//         throw new Error("Grau não identificado")
//     }

//     // Fluxo ideal, F -> C
//     let updateDegree = Number(degree.toUpperCase().replace('F', ''));
//     let formula = fahrenheit => (fahrenheit - 32) * 5/9 // arrow function
//     let degreeSign = 'C'

//     // Fluxo alternativo, C -> F
//     if(celsiusExists) {
//         updateDegree = Number(degree.toUpperCase().replace('C', ''));
//         formula = celsius => celsius * 9/5 + 32 // arrow function
//         degreeSign = 'F'
//     }
//     return formula(updateDegree) + degreeSign
// }
// try {
//     console.log(transForm('50f'))
//     console.log(transForm('10c'))
//     console.log(transForm('50&'))
// } catch (e){
//     console.log(e)
// }




