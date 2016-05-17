  //defines the button as a variable
var button=document.getElementById('my-button')

  //Causes button-click to alert
button.onclick = function () {
  alert("DID YOU NOT READ THE BUTTON???")
}

var clickTheButton = document.getElementById('clickIt')

  //button-click alert changes after 4 seconds after page load
  //<p> element appears (see style.css)
var myTimeout = setTimeout(function () {
  button.onclick = myAlert
  clickTheButton.style.display="block"
}, 4000)

  //button text changes using innerHTML 750ms after <p> element appears below button
var timeout2 = setTimeout(function() {
  button.innerHTML = "You may click the button"
}, 4750)

  //Alerts keep popping up until Cancel or X is pressed.
function myAlert() {
  do
  {
    var result = confirm("Click OK")
  } while (result === true)

alert("You're a quitter, Harry!")
}
