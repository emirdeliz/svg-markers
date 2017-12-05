function mouseOver(e) {
  var xPos = e.pageX - 50;
  var yPos = e.pageY - 50;
  var xy = 'Point: ' + xPos + ' x ' + yPos;
  document.getElementById('ttip').innerHTML = xy;
  document.getElementById('ttip').style.color = 'red';
  document.getElementById('ttip').style.visibility = 'visible';
  document.getElementById('ttip').style.left = xPos;
  document.getElementById('ttip').style.top = yPos;
}

function mouseOut() {
  document.getElementById('ttip').innerHTML   = '';
  document.getElementById('ttip').style.visibility = 'hidden';
}

const paths = document.querySelectorAll('path');
paths.forEach((path) => {
  path.addEventListener('mouseover', mouseOver);
  path.addEventListener('mouseout', mouseOut);
});
