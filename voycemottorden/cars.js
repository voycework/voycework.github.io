const body = document.body
const dialog = document.createElement('dialog')

class Cars {
  constructor(make, model, color, image, registration, price) {
    this.make = make
    this.model = model
    this.color = color
    this.image = image
    this.registration = registration
    this.price = price
  }

  click() {
    body.appendChild(dialog)
    dialog.innerHTML = 'Colour: ' + this.color + ', Registration: ' + this.registration
    dialog.setAttribute('open', 'open')
  }
}
imgProfile.onclick = function showMore(event) {
    car.showMore()
}

var car1 = new CarDescription('Porsche991', 'GT3', 'White', 'DADDY-01', 'R1 540 000');
var car2 = new CarDescription('Ford', 'Fiesta', 'Red', 'DDY001EC', 'R80 000');
var car3 = new CarDescription('Opel', 'Corsa', 'White', 'CYG204MP', 'R55 000');
var car4 = new CarDescription('BMW', '320i', 'White', 'CPT002GP', 'R240 000');
var car5 = new CarDescription('Mercedes Benz', 'C63s', 'black', 'JBL202AC', 'R 2 599 950');

let btn1 = document.getElementById('first-car')
let btn2 = document.getElementById('second-car')
let btn3 = document.getElementById('third-car')
let btn4 = document.getElementById('fourth-car')
let btn5 = document.getElementById('fifth-car')

btn1.onclick = () => car1.click()
btn2.onclick = () => car2.click()
btn3.onclick = () => car3.click()
btn4.onclick = () => car4.click()
btn5.onclick = () => car5.click()

btn1.onclick = function() {
    car.showmore();
  };

//   const display_cars = [   new makeCar(2008, "ferrari", "red", "car_image1", "bcv4", "R13000"),   new makeCar(2009, "chev", "white", "car_image2", "bcv5", "R48000"),   new makeCar(2010, "bmw", "black", "car_image3", "bcv6", "R15000"),   new makeCar(2011, "mercedes", "yellow", "car_image4", "bcv7", "R16000"),   new makeCar(2012, "mini", "blue", "car_image5", "bcv8", "R17000") ]


















// object constructor
// class CarDescription {
//     constructor(make, model, colour, registrationNumber, price) {
//         this.make = make;
//         this.model = model;
//         this.colour = colour;
//         this.registrationNumber = registrationNumber;
//         this.price = price;
//     }
// }

// declaring and assigning the car objects 
// var car1 = new CarDescription('Porsche991', 'GT3', 'White', 'DADDY-01', 'R1 540 000');
// var car2 = new CarDescription('Ford', 'Fiesta', 'Red', 'DDY001EC', 'R80 000');
// var car3 = new CarDescription('Opel', 'Corsa', 'White', 'CYG204MP', 'R55 000');
// var car4 = new CarDescription('BMW', '320i', 'White', 'CPT002GP', 'R240 000');
// var car5 = new CarDescription('Mercedes Benz', 'C63s', 'black', 'JBL202AC', 'R 2 599 950');

// console.log(car1.make,);
// console.log(car1.model);
// console.log(car1.colour);
// console.log(car1.registrationNumber);
// console.log(car1.price)


// var img2 = document.createElement("img");
// img2.src = "images/2022_ford_fiesta.jpg";
// document.body.appendChild(img2)

// function showText() {
//     document.getElementById("text").style.display = "inline";
//     document.querySelector("#text").style.display = "inline";
//     document.getElementsById("more").style.display = "none";
// }




// var myImage1 = new Image(100, 200);
// myImage1.src = 'images/2018_porsche_gt3.webp';
// document.body.appendChild(myImage1);

// var myImage2 = new Image(100, 200);
// myImage.src = 'images/2022_ford_fiesta.jpg';
// document.body.appendChild(myImage);

// var myImage3 = new Image(100, 200);
// myImage.src = 'images/2008_Opel_Corsa.jpg';
// document.body.appendChild(myImage);

// console.log(myImage1)


