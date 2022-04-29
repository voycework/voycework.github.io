let timer= document.getElementById("initializer");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
const cont = document.getElementById("continue")

let i = 1;
let intervalPause;

start.addEventListener("click", function(){
    intervalPause = setInterval(function(){
   i += 1;
   initializer.textContent = i;
    }, 2000);;
});

pause.addEventListener("click", function () {
    clearInterval(intervalPause);
})


// declaring and assigning buttons 
const buttons = document.getElementsByTagName("button");
let buttonsAll = []

// putting all buttons in an Array
for (let i=0; i<buttons.length; i++){
    if (buttons[i].id != "pause"){
        buttonsAll.push(buttons[i])
    }
};

cont.addEventListener("click", function() {
   clearInterval(intervalId);
   buttonsAll.forEach(button=> disableButton(button));
});