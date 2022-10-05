/**
 * Promise
 *
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 * Teste em cima de um pedido em Uber
 **/

let aceitar = true

console.log('Pedir Uber')

const promessa = new Promise((resolve, reject) => {

    if (aceitar) {
        return resolve('Pedido Aceito!')
    } else {
        return reject('Pedido negado!')
    }
})

console.log('Aguardando')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))