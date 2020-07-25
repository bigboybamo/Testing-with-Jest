const calc = require('./calculatro')

test('adding',()=>{

    expect(calc.add(1,2)).toBe(3)
})

test('Subtracting',()=>{
    expect(calc.subtract(9,2)).toBe(7)
})

test('division',()=>{
    expect(calc.divide(4,2)).toBe(2)
}
)

test('multiplication',()=>{
    expect(calc.multiply(2,5)).toBe(10)
})