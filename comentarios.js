// strings
console.log('Hello World'); // Console.logo é uma função que exibe uma mensagem no console do navegador
console.log('isto é uma string'); // Strings são cadeias de caracteres
console.log(`
    ${1 + 1} é igual a 2
`)

// numbers
console.log(35 + 40)
console.log(12.55 + 100)
console.log(45/5)
console.log(5*5)
console.log(7-5)

// booleans
var t = true
var f = false
if (t){
    console.log('isto é verdadeiro')
} // if é uma função que executa um bloco de código se a condição for verdadeira
else
{
    console.log('isto é falso')
} // else é uma função que executa um bloco de código se a condição for falsa

// undefined
console.log(undefined) // undefined é uma variável que não tem valor definido e ainda não foi declarada em nenhum lugar

// null 
console.log(null) // null é uma variável que não tem valor 

// objects
console.log({}) // {} é um objeto vazio
console.log({
    name: 'João',
    idade: 20,
    andar: function(){
        console.log('andar')
    }
})

// arrays
console.log([]) // [] é um array vazio
console.log(["João", 20])
console.log(["leite", "ovos", "carne", "arroz", "feijão",1,10,])

/*
## Primitive types ## sao imutaveis
- String
- Number
- Boolean
- Undefined
- Symbol
- BigInt

## Structural types
- Object
    - Array
    - Map
    - Set
    - Date
    - ...
- Function

## Primitive structural / Structural root primitive
- null

---------------------------------------------------------
# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

---------------------------------------------------------
# Scope
* Escopo determina a visibilidade de alguma variável no JS

# Block statement
* Agrupamento de código
// if, else, for, while, function, etc
```js
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`.

---------------------------------------------------------

## var
// var é global e poderá funcionar fora de um escopo de bloco

---------------------------------------------------------

## Para criar nomes
* JS é case-sensitive
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maíusculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome
    * Utilizar palavras reservadas

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês
    * Utilizar nomes que não são genéricos
    * Utilizar nomes que não são palavras reservadas
*/ 

