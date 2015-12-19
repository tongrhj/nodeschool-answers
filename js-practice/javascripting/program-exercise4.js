module.exports= function getShortMessages (messages) {
  var strings = messages.map(function (obj) {return obj.message})
  return strings.filter(function(str) {return str.length < 50})
}
