const { createHashMap } = require ('./hashmap')

const test = createHashMap()

// console.log(test.hash('Fred'))
// console.log(test.hash('Sarah'))
// console.log(test.hash('Elena'))
// console.log(test.hash('Yoshi'))
// console.log(test.hash('Idris'))
// console.log(test.hash('Mei Li'))
// console.log(test.hash('Harry'))

console.log(test.set('Fred', 'Engineer'))
console.log(test.set('Fred', 'Programmer'))
console.log(test.set('Sarah', 'Project Manager'))
console.log(test.set('Elena', 'Pilot'))
console.log(test.set('Yoshi', 'Barber'))
console.log(test.set('Idris', 'Politician'))
console.log(test.set('Mei Li', 'Journalist'))
console.log(test.set('Elena', 'Film Producer'))
console.log(test.set('Sarah', 'Teacher'))
console.log(test.set('Kamala', 'Server'))
console.log(test.set('Becca', 'Professor'))
console.log(test.set('Harry', 'Doctor'))
console.log(test.set('Donald', 'Dentist'))
console.log(test.set('Leon', 'Sailor'))
console.log(test.set('Hiroto', 'Cleaner'))
console.log(test.set('Clement', 'CEO'))
console.log(test.set('Jose', 'President'))
console.log(test.set('Lulu', 'Manager'))
console.log(test.set('Shalini', 'Actor'))
console.log(test.set('Ralph', 'Singer'))

// console.log(test.bucketsArray)

// console.log(test.get('Fred'))
// console.log(test.get('Sarah'))
// console.log(test.get('Elena'))
// console.log(test.get('Yoshi'))
// console.log(test.get('Idris'))
// console.log(test.get('Mei Li'))

// console.log(test.has('Fred'))
// console.log(test.has('Sarah'))
// console.log(test.has('Donald'))
// console.log(test.has('Elena'))
// console.log(test.has('Yoshi'))
// console.log(test.has('Idris'))
// console.log(test.has('Kamala'))
// console.log(test.has('Mei Li'))
// console.log(test.has('Kyle'))

// console.log(test.remove('Sarah'))
// console.log(test.remove('Elena'))
// console.log(test.remove('Mei Li'))
// console.log(test.remove('Kamala'))
// console.log(test.remove('Becca'))

console.log(test.length())

// console.log(test.clear())

// console.log(test.keys())

// console.log(test.values())

console.log(test.entries())

// console.log(test.expandArray())

console.log(test.bucketsArray)
