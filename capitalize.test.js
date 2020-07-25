const capt = require('./capitalize')

test('capitalize first word', ()=>{
    expect(capt('ball')).toBe('Ball')
})

test('number', ()=>{
    expect(capt(8)).toBe(8)
})