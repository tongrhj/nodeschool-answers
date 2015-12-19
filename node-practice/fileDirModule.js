// SOLUTION- why didn't the others work? WHO KNOWS?
var fs = require('fs')
var path = require('path')

module.exports = function (dirName, fileExt, callback) {
  var processedList

  fs.readdir(dirName, function (err, list) {
    if (err) {
      return callback(err) // early return
    } else {
      processedList = list.filter(function (fileName) {
        return path.extname(fileName) === '.' + fileExt
      })
    }
  callback(null, processedList)
  })
}

// module.exports = function (dirName, fileExt, callback) {
//   fs.readdir(dirName, function (err, list) {
//     console.log(err)
//   })
// }

// var processedList
//
// fs.readdir(dirName, function (err, list) {
//   if (err) {
//     return callback(err) // early return
//   } else {
//     processedList = list.filter(function (fileName) {
//       return path.extname(fileName) === '.' + fileExt
//     })
//   }
// })
//
// callback(null, processedList)


// function (dirName, fileExt, callbackFunction) {
//   function (callbackFunction) {
//     fs.readdir(dirName, function (err, list) {
//        if (err)
//         return callbackFunction(err)
//         else {
//           callbackFunction(list)
//           }
//         })
//     }
//   }


//       if (err)
//         return callbackFunction(err) // early return
//
//       // ... no error, continue doing cool things with `data`
//
//       // all went well, call callback with `null` for the error argument
//
//       callbackFunction(null, data)
//     })
//   }
//  }
//
//  function callbackFunction (err, list) {
//    list.forEach(function (fileName) {
//      if (path.extname(fileName) === '.' + fileExt) {
//        console.log(fileName)
//  }
