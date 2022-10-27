// podemos declarar funcoes dentro de variaveis e chamado de funcoes anonimas, mas nao e recomendado.
// function expression
// function anonymous

// parametros da funcao
// const sum = function(number1, number2) {
//     console.log(number1 + number2) // com console.log, a funcao nao retorna nada, apenas executa a soma ou seja imprime no console.
// }
// sum(25, 25) // arguments - argumentos da funcao
// sum(18, 18)
// sum(2, 2.5)	

// let total = 0 // variavel global

// const sum = function(number1, number2) {
//     let total = number1 + number2 // variavel local
//     return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${sum(number1, number2)}`)
// console.log(total)

// function fazerSuco(fruta1, fruta2) {
//     return `soco de: ${fruta1+fruta2}` // return finaliza a funcao e retorna o valor da funcao para o local onde foi chamada. 
// }
// const copo = fazerSuco('banana', 'whey')

// console.log(copo)

// //function scope
// let subject = 'create video'
// function createThink(subject) {
//     subject = 'study'
//     return subject
// }
// console.log(createThink(subject))
// console.log(subject)

// Function hoisting

// sayMyname();

// function sayMyname() {
//     console.log('irineu')
// }

// // Arrow function

// const sayMyname = (name) =>{
//     console.log(name)
// }
// sayMyname('Irineu')

// Callback function

// function sayMyname(name) {
//     console.log('antes de executar a funcao callback')
//     name() // callback function - funcao que sera executada dentro de outra funcao e so sera executada quando for chamada. 
//     console.log('depois de executar a funcao callback')
// }

// sayMyname(
//     () => { 
//         console.log('estou em uma callback') // funcao sayMyname recebe uma funcao anonima como parametro e executa a funcao anonima. 
//     }
// )

/*
    Function() constructor

    * expressao new
    * criar um novo objeto
    * this keyword
*/

// function Person(name, age) {
//     this.name = name // this.name - referencia o atributo name do objeto criado. this - referencia o objeto criado.

//     this.age = age

//     this.walk = function () {
//         return this.name + " está andando"
//     }

//     this.noWalk = function () {
//         return this.name + " não está andando"
//     }
    
//     this.abrirPorta = function () {
//         return this.name + " abriu a porta"
//     }

//     this.fecharPorta = function () {
//         return this.name + " fechou a porta"
//     }
// }

// const iri = new Person('Irineu', 25) // new - cria um novo objeto
// const joao = new Person('Joao')

// console.log(iri)

// console.log(iri.abrirPorta())
// console.log(joao.fecharPorta())