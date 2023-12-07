const {soma} = require('../utils/sum')

test('Should return a sum of two numbers', () =>{
  expect(soma(5,5)).toBe(10)
})


describe('Teste de divisão', ()=>{
  test('Deve retornar a divisão de dois números', ()=>{
    expect(divisao(10,2)).toBe(5)
  })

  test('Deve retornar a divisão de dois números', ()=>{
    expect(divisao(10,3)).toBe(5)
  })
})

console.log("Testando a mudança de branch");