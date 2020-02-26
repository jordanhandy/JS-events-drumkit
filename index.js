// Javascript for Drum Kit
// For all drums, event listeners are added to their images, for click events

for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", mouseClick);

  // On mouse click, use the letter values inside the buttons to trigger the corresponding sound
  function mouseClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

// Add event listener for keyboard events (specifically key down)
document.addEventListener("keydown", keyboardListen);

// ANONYMOUS FUNCTION
// document.addEventListener("keydown", function(event){
//   makeSound(event.key);
//   console.log(event);
// });

// Keyboard listener.  When a keyboard press is detected,
// make a sound corresponding to the given letter, and animate the
// button in question.
// Is logged for debugging
function keyboardListen(event){
  //Keydown events can pass the value of the key being pressed
  // This is also contained in the innerHTML of the button itself,
  // which is why we switch on the keypress value
  makeSound(event.key);
  buttonAnimation(event.key);
  console.log(event);
}

// To make a sound, switch on the value of the key pressed.
// Case statements
function makeSound(key){
  switch (key) {
    case "w":
      var audioW = new Audio("sounds/crash.mp3");
      audioW.play();
      break;

    case "a":
      var audioA = new Audio("sounds/kick-bass.mp3");
      audioA.play();
      break;

    case "s":
      var audioS = new Audio("sounds/snare.mp3");
      audioS.play();
      break;

    case "d":
      var audioD = new Audio("sounds/tom-1.mp3");
      audioD.play();
      break;

    case "j":
      var audioJ = new Audio("sounds/tom-2.mp3");
      audioJ.play();
      break;

    case "k":
      var audioK = new Audio("sounds/tom-3.mp3");
      audioK.play();
      break;

    case "l":
      var audioL = new Audio("sounds/tom-4.mp3");
      audioL.play();
      break;
    default:
    console.log(key);
  }
}
// Button styling changes when it is pressed,
// to give the impression that it is currently active.
// After a timeout, the class is changed back
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
