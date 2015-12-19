/* An attempt at Recursive & Functional Solution */
// var testArray = []
//
// function createArray (max) {
//   for (var i = 0; i < max; i++) {
//     testArray.push(i + 1)
//   }
//   console.log(testArray)
// }

function checkDivision (x) {
  var messageToPrint = ''
  if (x % 3 === 0) messageToPrint += 'fizz'
  if (x % 5 === 0) messageToPrint += 'buzz'
  console.log(messageToPrint || x)

  if (x < 100) {
    var newx = x + 1
    checkDivision(newx)
  }
}

checkDivision(1)

/* Canonical Solution */
for (var i = 1; i <= 100; i++) {
  var messageToPrint
  if (i % 3 === 0 && i % 5 === 0) {
    messageToPrint = 'fizzbuzz'
  } else if (i % 3 === 0) {
    messageToPrint = 'fizz'
  } else if (i % 5 === 0) {
    messageToPrint = 'buzz'
  } else {
    messageToPrint = i
  }
  console.log(messageToPrint)
}
