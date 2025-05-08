var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Adding Event listner for the Button clicked to make sound
for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var btn = this.innerHTML;

        makeSound(btn);
        addAnimation(btn);
    });
}

// Adding Event listner for the key pressed to make sound
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    addAnimation(event.key);
});


// Function to make sound when key pressed of button clicked
function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong Button Pressed")
    }
}


// Function for adding the animation to the button when it is clicked or the key is pressed
function addAnimation(key){
    var btnTriggered = document.querySelector("." + key);
    btnTriggered.classList.add("pressed");
    
    setTimeout(function (){
        btnTriggered.classList.remove("pressed");
    }, 100);
}