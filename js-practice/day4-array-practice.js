/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

 var q1 = [ "image1.png", "image2.png", "image3.png"];

 var q2 = q1[0];

 var q3 = q1.length;

 var q4 = q1[q1.length-1];

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

/* Professor X Lab */
var q1 = [1,2,3,4];
function increaseByOne (elem, index, array) {
  array.pop(array[index])
  var x = elem+1;
  array.push(x);
}
q1.forEach(increaseByOne)
console.log(q1)

/* ********* BEST ******* SOLUTION */
var q1 = [1,2,3,4];
function increaseByOne (elem, index, array) {
  array[index]+=1;
}
q1.forEach(increaseByOne)
console.log(q1)

/* but this is extremely bad practice because forEach isn't supposed to change the data you were given, so you're jeopardising other uses of q1 */

/***********************************/

/* to store in new array */
var q1 = [1,2,3,4];
var q2 = [];
function increaseByOne (elem, index) {
  q2[index] = elem+1;
}
q1.forEach(increaseByOne)
console.log(q2)

/* OR */
var q1 = [1,2,3,4];
q1.map(function(x) {return x+=1})


/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */

/* this is one method */
var sum = 0;

q1.forEach(addToSum);

function addToSum (x) {
  sum += x
}

var q2 = sum/(q1.length || 1);

/* this is the more elegant value */
var q1 = [2,3,4,5];
var total = q1.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
});

var numberOfNumbers = q1.length || 1;

var q2 = total/numberOfNumbers;


// Your code here
