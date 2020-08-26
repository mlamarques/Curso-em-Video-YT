let num = [5, 8, 9, 2]

console.log(num)

num[3] = 6 //JavaScript cria um novo elemento
num.push(7) // '' com o metodo push()
num.length // nao utiliza parenteses (.length eh um atributo)
num.sort() // coloca os elemento em ordem crescente
num.indexOf(8) // indica o valor do index para o valor selecionado, caso inexistente -> -1

/*
Metodo tradicional do percurso de vetores:

for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}

*/

//Metodo mais moderno (otimizado p/ vetores e objetos):

for(let pos in num) {
    console.log(num[pos])
}