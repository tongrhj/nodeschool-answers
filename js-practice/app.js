(function makeTextFillScreen () {
  var text = document.getElementById('description')
  var parentWidth = text.parentNode.clientWidth;
  text.style.fontSize = parentWidth/12 + 'px'
}) ()
