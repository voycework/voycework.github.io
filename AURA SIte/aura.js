// js for toggle Menu

let counter = 0;

document.getElementById("bars").addEventListener( "click", function(){

let navlinks = document.getElementById("nav-link");
let countDisp = document.getElementById("counter");



    if (disp() % 2 !== 0){
        navlinks.style.display="block";

    }else{
        navlinks.style.display="none";
    }
    counter.innerHTML = "disp()"; 
})

function disp(){
    counter = counter + 1;
    return counter;
}