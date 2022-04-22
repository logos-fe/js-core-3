// objects
// key: value
// key only string
// value anything

// const obj1 = new Object() // конструктор
// const obj2 = {} // літерали
//
// const user = {
//   name: 'Khrystyna',
//   lastname: 'Styslo',
//   'like reading': true,
//   qwe: 1
// }

// console.log(user.lastname)

// user.lastname = 'Sssss' // мутація об`єкта
// user.age = 21

// user['like reading']

// console.log(user)

// delete user.qwe

// console.log(user)


// function makeUser(name, lastname, age, reading) {
//   return {
//     name: name,
//     lastname: lastname,
//     age: age,
//     'like reading': reading,
//   }
// }
//
// const userAndrii = makeUser('Andrii', 'AAA', 12, false)
// const userAnna = makeUser('Anna', 'RRR', 23, true)
// console.log(userAndrii, userAnna)

// key in object
// console.log('name' in user)
// console.log('asdf' in user)

// hasOwnProperty
// console.log(user.hasOwnProperty('name'))
// console.log(user.hasOwnProperty('aaaa'))

// const person = {
//   name: 'Khrystyna',
//   city: 'Lviv',
//   birth: {
//     date: 4,
//     month: 2,
//     year: 2001,
//   },
//   showMessage: () => {
//     return `My name is ${person.name}, I live in ${person.city}`
//   }
// }

// console.log(person.showMessage())
// console.log(person.birth.year)

// for (let key in person) {
//   console.log('key', key)
//   console.log('value', person[key])
// }

// КОПІЮВАННЯ ОБЄКТІВ / СИЛКИ НА ОБЄКТИ
// let message = 'Hello'
// let phrase = message

let obj = {
  a: 2,
  b: 5
}

// let copyObj = obj
// copyObj.a = 10

// console.log(obj, copyObj)
// console.log(obj === copyObj)

// let a = {}
// let b = {}

// console.log(a === b)
// let copyObj = {}
// for (let key in obj) {
//   copyObj[key] = obj[key]
// }
// copyObj.a = 10
// console.log(obj, copyObj)

// Object.assign() - обєднання об'єктів
// let copyObj = Object.assign({}, obj)
// copyObj.a = 10
// console.log(obj, copyObj)

// Object.freeze() - константа для об'єктів
// const user = {
//   name: 'Khrystyna',
//   lastName: 'Styslo'
// }

// Object.freeze(user)

// user.name = 'Anna'
// user.age = 21

// console.log(user)

// Object.seal() - не можна додавати нових значень, але можна змінювати наявні
// const user = {
//   name: 'Khrystyna',
//   lastName: 'Styslo'
// }
//
// Object.seal(user)
//
// user.name = 'Anna'
// user.age = 21
//
// console.log(user)

// Function constructor
// function Student(name, age) {
//   this.age = age
//   this.name = name
//   this.showData = () => {
//     return `My name is ${this.name}, I'm ${this.age} years old`
//   }
// }
//
// const studentOleh = new Student('Oleh', 22)
// const studentInna = new Student('Inna', 27)
// console.log(studentInna.showData())



