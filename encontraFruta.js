const frutas = [
    'mamao',
    'maca',
    'melao',
    'melancia',
    'laranja',
    'pesego'
];

const letra = 'm'
let total = 0
for (const encontrada of frutas) {
    encontrada[0][0] !== letra ? total++ : ''
}
console.log(`
Total de frutas que não começam com a letra ${letra} é ${total}
`);