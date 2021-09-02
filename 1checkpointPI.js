/* Microondas */

let menuComidas = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro']
let tempoPreparo = [10, 8, 15, 12, 8]

let tempoInserido = 15.9
let indiceComidas = menuComidas.indexOf('Brigadeiro')

let mensagem = ''
let tempo = tempoPreparo [indiceComidas]

/* Tempo menor que o padrão */
if (tempoInserido < tempo)
{ mensagem = 'Tempo insuficiente! ⏰'}

/* Mais de 2 vezes o necessário */
else if (tempoInserido > 2 * tempo && tempoInserido <= 3 * tempo)
{ mensagem = 'A comida queimou! 🔥'}

/* Tempo 3 vezes maior que o necesário */
else if (tempoInserido > 3 * tempo)
{ mensagem = 'Kabuuuummm! 💥'}

/* Tempo correto entre mínimo e até 2 vezes o valor */
else if (tempoInserido >= tempo && tempoInserido <= 2 * tempo)
{ mensagem = 'Prato pronto, bom apetite! 😋'}

/* Prato não listado */
else { mensagem = 'Prato inexistente! 🚫'}

console.log(mensagem)