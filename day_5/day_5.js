/*
Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

|----------------|----------------|----------------|
|   const giftsCities = [12, 3, 11, 5, 7]          |
|   const maxGifts = 20                            |
|   const maxCities = 3                            |
|                                                  |
|   //la suma más alta de regalos a repartir       |
|  // visitando un máximo de 3 ciudades            |
| // es de 20: [12, 3, 5]                          |
|                                                  |
|   // la suma más alta sería [12, 7, 11]          |
|  // pero excede el límite de 20 regalos y tendría|
| // que dejar alguna ciudad a medias.             |
|                                                  |
|   getMaxGifts(giftsCities, maxGifts, maxCities)  |
|   // 20                                          |
|----------------|----------------|----------------|
*/

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
        giftsCities.map( () => {
            let cityCount = 0
            let acc = 0
            for(let i = 0; i < cityLength; i++) {
                if(cityCount === maxCities) break
                if(acc + giftsCities[i] <= maxGifts) {
                    acc += giftsCities[i]
                    cityCount++
                }
            }
            if(acc > maxGiftsValid) maxGiftsValid = acc
            giftsCities.push(giftsCities[0])
            giftsCities.shift()
        })
    return maxGiftsValid
}