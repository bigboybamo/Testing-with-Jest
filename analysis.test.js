const change = require('./analysis')



test('checking the average', ()=> {

expect(change([1,2,3,4,5]).averagee).toBe(3)

})

test('checking the max value',()=>{
    expect(change([1,2,3,4,5]).max).toBe(5)
})

test('checking the min value',()=>{
    expect(change([1,2,3,4,5]).min).toBe(1)
})

test('checking the length of the array', ()=>{

expect(change([1,2,3,4,5]).length).toBe(5)

})