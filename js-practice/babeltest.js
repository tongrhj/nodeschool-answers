/* Class */
'use strict'

class Animal {
  constructor (name) {
    this.name = name
  }

  speak () {
    console.log(this.name + ' makes a noise.')
  }
}

var dog = new Animal('dog')
dog.speak()



/* Arrow Functions */
var myArray = [1,2,3,4,5]
var myNewArray = []

myArray.forEach(number => {myNewArray.push(number*2)})
console.log(myNewArray);
