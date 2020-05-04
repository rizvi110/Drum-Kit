// find the number of drum class elements and apply to all buttons of class drum.
// document.querySelectorAll(".drum")[0,1,2,3,4,5,6].addEventListener ( "click",function(){alert("I got clicked");})
var x = document.querySelectorAll(".drum");

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function(){
    buttonInnerHTML = this.innerHTML;
    buttonPress(buttonInnerHTML) ;
  })}

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("keydown", function(event){
    buttonInnerHTML = event.key;
    buttonPress(buttonInnerHTML) ;
  })}

function buttonPress(buttonInnerHTML) {
switch (buttonInnerHTML) {
  case "w":
  case "KeyW":
    // console.log(buttonInnerHTML);
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "a":
  case "KeyA":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "s":
  case "KeyS":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "d":
  case "KeyD":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "j":
  case "KeyJ":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "k":
  case "KeyK":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  case "l":
  case "KeyL":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    activeClass(buttonInnerHTML);
    break;
  default: console.log(button.innerHTML);
}
}

// function buttonAnimation(buttonInnerHTML)

function activeClass(buttonInnerHTML) {
  document.querySelector(".set ."+ buttonInnerHTML+"").classList.add("pressed");
window.setTimeout(function(){
  {
   document.querySelector(".set ."+ buttonInnerHTML+"").classList.remove("pressed");
 }
}, 100);

}
