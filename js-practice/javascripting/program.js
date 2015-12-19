function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}

module.exports = countWords
