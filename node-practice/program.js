// SOLUTION TO LEVEL 9
// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.
var http = require('http')

var requestURLs = [process.argv[2], process.argv[3], process.argv[4]]

// You must collect the complete content provided to you by each of the URLs and print the data as a String to the console (stdout); one line per URL.
// The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

// You will need to queue the results and keep track of how many of the URLs have returned their entire contents.

// HOW TO DO THIS?
// Counting Callbacks

var urlCount = requestURLs.length

var allData = []

requestURLs.forEach(function (requestURL) {
  http.get(requestURL, function callback (response) {
    // Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

    // HOW TO DO THAT:
    // Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.
    var urlData = ''

    response.on("data", function (data) {
      return urlData += data
    }).setEncoding('utf8')

    // The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
    response.on("end", function () {
      urlCount --
      if (urlCount === 0) {
        allData.push(urlData.toString())

        allData.forEach(function (urlData) {
          console.log(urlData)
        })
        
      }
    })
  })


})

// var allData
//
// requestURLs.forEach(function (url) {
//   http.get(url, function (response) {
//     response.on("data", function (data) {
//       return data
//     })
//
//     response.on("end", function () {
//         urlCount --
//     })
//   })
//
//   if (urlCount <= 0) {
//     console.log(allData)
//   }
// })


// // SOLUTION TO LEVEL 8
//
// // Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
// var http = require('http')
// var requestURL = process.argv[2]
//
// http.get(requestURL, function callback (response) {
//   // Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
//
//   // HOW TO DO THAT:
//   // Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.
//   var allData = ''
//
//   response.on("data", function (data) {
//     return allData += data
//   }).setEncoding('utf8')
//
//   // The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
//   response.on("end", function () {
//     console.log(allData.length)
//     console.log(allData.toString())
//   })
//
// })



// SOLUTION TO LEVEL 7
//For this exercise you will need to use the http core module.
// var http = require('http')
//
// // Write a program that performs an HTTP GET request to a URL
// // a URL is provided to you as the first command-line argument
// var requestURL = process.argv[2]
//
// // The first argument to http.get() can be the URL you want to GET; provide a callback as the second argument.
// http.get(requestURL, function callback (response) {
//
//   // The three events that are generally of most interest are: "data", "error" and "end"
//   response.on("data", function (data) {
//
//     // Write the String contents of each "data" event from the response to a new line on the console (stdout).
//     console.log(data)
//   }).setEncoding('utf8')
//   //The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.
//
// })



// SOLUTION TO LEVEL 6
// var filterFn = require('./fileDirModule.js')
//
// var dirName = process.argv[2]
// var fileExt = process.argv[3]
//
//
// // SOLUTION
// filterFn(dirName, fileExt, function mainCallback (err, processedList) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   processedList.forEach(function (fileName) {
//     console.log(fileName)
//   })
// })

// var fs = require('fs')
//
// // Need to require any Node modules
// var path = require('path')
//
// //Import a local Module
// var filterFn = require('./fileDirModule.js')

// use process.argv[2] to access the first argument passed to our command line program

// MY FIRST ASYNC I/O
// var dirName = process.argv[2]
// var fileExt = process.argv[3]

// fs.readdir(dirName, function (err, list) {
//     list.forEach(function (fileName) {
//       if (path.extname(fileName) === '.' + fileExt) {
//         console.log(fileName)
//       }
//     })
//   })

// MAKING IT MODULAR

// filterFn(dirName, fileExt, function mainCallback (err, processedList) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   processedList.forEach(function (fileName) {
//     console.log(fileName)
//   })
// })
