
const sum = require('./sum');

test('Verificar se a soma retorna valores positivos.', () => {
    expect(sum(2,2)).toBe(4);
});
  
test('Verificar se a soma retorna valores negativos.', () => {
    expect(sum(-2,-2)).toBe(-4);
});

test('Verificar se a soma retorna valores positivos e negativos.', () => {
    expect(sum(2,-2)).toBe(0);
});
 
