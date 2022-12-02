wrapping = (gifts) => gifts.map(gift => envolver('*', gift, 2));

envolver = (papel, palabra, extension) => `${papel.repeat(palabra.length + extension)}\n*${palabra}*\n${papel.repeat(palabra.length + extension)}`

console.log(wrapping(['regalo 1', 'regalo 2', 'regalo 3']));