let myFunctions = require('./functions')

test('return 2 test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(myFunctions.greeting('Nate')).toBe("Hello, Nate.")
})

test('add', () => {
    expect(myFunctions.add(3,4)).toBe(7)
})
