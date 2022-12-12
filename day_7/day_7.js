/*
    En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.
    
    Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
    
    Por ejemplo, si tenemos los siguientes almacenes:

    |-----------------------------------------------------------------------------------------------------------------------------------|
    |   const a1 = ['bici', 'coche', 'bioci', 'bici']                                                                                   |
    |   const a2 = ['coche', 'bici', 'coche', 'muñeca']                                                                                 |
    |   const a3 = ['bici', 'pc', 'pc']                                                                                                 |
    |                                                                                                                                   |
    |   const gifts = getGiftsToRefill(a1, a2, a3)                                                                                      |
    |  console.log(gifts) // ['muñeca', 'pc']                                                                                           |
    |-----------------------------------------------------------------------------------------------------------------------------------|

    Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.
*/

function getGiftsToRefill(a1, a2, a3) {
    let allGifts = [...a1, ...a2, ...a3]
    let buy = [];
    for (let i = 0; i < allGifts.length; i++) {
        let gift = allGifts.filter(g => g === allGifts[i])
        if (gift.length < 3) {
            buy.push(gift[0])
        }
    }
    buy = buy.filter((a, b) => buy.indexOf(a) === b)
    return buy
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'coche', 'muñeca']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3)

console.log('gifts to buy: ', gifts);