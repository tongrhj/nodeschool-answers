// LEARNYOUMONGO EXERCISE 9: AGGREGATE
var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err

  var collection = db.collection('prices')

  var givenSize = process.argv[2]

  collection.aggregate([
      { $match: { size: givenSize } },
      { $group: { _id: null, averagePrice: { $avg: '$price' } } }
    ]).toArray((err, results) => {
      if (err) throw err
      console.log(Number(results[0].averagePrice).toFixed(2))
      db.close()
    })

})

// LEARNYOUMONGO EXERCISE 8: COUNT
// var mongo = require('mongodb').MongoClient
//
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
//   if (err) throw err
//
//   var collection = db.collection('parrots')
//
//   var givenAge = parseInt(process.argv[2])
//
//   collection.count({
//       age: { $gt: +givenAge }
//     }, (err, count) => {
//       if (err) throw err
//       console.log(count)
//       db.close()
//     })
//
// })

// LEARNYOUMONGO EXERCISE 7: REMOVE
// var mongo = require('mongodb').MongoClient
//
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
//   if (err) throw err
//
//   var collection = db.collection(process.argv[3].toString())
//
//   var removeID = process.argv[4]
//
//   collection.remove({
//       _id: removeID
//     }, (err, data) => {
//       if (err) throw err
//       db.close()
//     })
//
// })

// LEARNYOUMONGO EXERCISE 6: UPDATE
// var mongo = require('mongodb').MongoClient
//
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
//   if (err) throw err
//
//   var collection = db.collection('users')
//
//   collection.update({
//        username: "tinatime"
//     }, {
//       $set: {
//         age: 40
//       }
//     }, (err, data) => {
//       if (err) throw err
//       db.close()
//     })
//
// })

// LEARNYOUMONGO EXERCISE 5: INSERT
// var mongo = require('mongodb').MongoClient
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
//   if (err) throw err
//
//   var collection = db.collection('docs')
//
//   var firstName = process.argv[2]
//   var lastName = process.argv[3]
//   var insertDoc = { firstName: firstName, lastName: lastName }
//   console.log(JSON.stringify(insertDoc))
//
//   collection.insert(insertDoc, (err, data) => {
//     if (err) throw err
//     console.log(JSON.stringify(insertDoc))
//     db.close()
//   })
// })

// LEARNYOUMONGO EXERCISE 4: FIND AND PROJECTION
// const mongo = require('mongodb').MongoClient
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
//   if (err) throw err
//
//   var givenAge = parseInt(process.argv[2])
//
//   db.collection('parrots').find(
//     { age: { $gt: +givenAge }},
//     { name: 1,
//       age: 1,
//       _id: 0 }
//   ).toArray((err, docs) => {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })

// Learnyoumongo Exercise 3 Solution: FIND
// var mongo = require('mongodb').MongoClient
//   mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//     var givenAge = parseInt(process.argv[2])
//
//     db.collection('parrots').find().toArray(function(err, documents) {
//       console.log(documents.filter((document) => {
//         return (document.age > givenAge)
//       }))
//       db.close()
//     })
//   })
