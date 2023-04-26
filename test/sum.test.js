
const sum = require('../src/sum');

test('Verificar se a soma retorna valores positivos.', () => {
    expect(sum(2,2)).toBe(4);
});
  
test('Verificar se a soma retorna valores negativos.', () => {
    expect(sum(-2,-2)).toBe(-4);
});

test('Verificar se a soma retorna valores positivos e negativos.', () => {
    expect(sum(2,-2)).toBe(0);
});

test('Verificar se a soma não retorna valores incorretos.', () => {
    expect(sum(2,3)).not.toBe(6);
    expect(sum(2,1)).not.toBe(2);
    expect(sum(2,4)).not.toBe(8);
    expect(sum(2,5)).not.toBe(10);
});
 
