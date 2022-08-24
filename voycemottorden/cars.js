// object constuctor
function Car(make, model, colour, image, registrationNumber, price) {
  this.make = make,
  this.model = model,
  this.colour = colour,
  this.imageSrc = image,
  this.registrationNumber = registrationNumber,
  this.price = price,

  this.greeting = function() {
    alert("Welcome to 'Voyce's Mottor Den' we sell cars like " + this.make + " " + this.model + " " + "from low prices of" + " " + this.price + " and many more.");
  };
}    

    // declaring and assigning the car objects 
    var car1 = new Car("Porsche991", "GT3", "Red", "images/2018_porsche_gt3.webp", "BBY001", "R280 000");
    var car2 = new Car("Ford", "Fiesta", "Red", "images/2022_ford_fiesta.jpg", "DDY001EC", "R80 000");
    var car3 = new Car("Opel", "Corsa", "White","images/2008_Opel_Corsa.jpg" , "CYG204MP", "R55 000");
    var car4 = new Car("BMW", "320i", "White", "images/bmw_3-Series.jpg", "CPT002GP", "R240 000");
    var car5 = new Car("Mercedes Benz", "C63s", "black","images/2022_MercedeceBenz.jpg" , "JBL202AC", "R 2 599 950");

    //Below we create an array that stores the Car objects we have created.
    let arrayOfCars = [car1, car2, car3, car4, car5]

    var loaded = {};
    //Below we create a function that will be used to add the information stored in the person objects to our HTML page.
    loaded.addCars = function() {
    arrayOfCars.forEach(function(vehicle){
    let div = document.getElementById("car-details");
    //For each of the objects, we create an image element that will display the Person's profile pic.
    let imgCar = document.createElement("img");
    imgCar.src = vehicle.imageSrc;
    imgCar.alt = vehicle.make + " " + vehicle.model;
    imgCar.style.height = "200px";
    imgCar.style.width = "150px";

    //For each of the objects, we create 2 buttons.
    //The first button we add for each person object is called btnGreeting.
    let btnGreeting = document.createElement("button"); 
    btnGreeting.innerHTML = "Say hi";
    //We add an eventListener that will recognise when btnGreeting has been clicked and will call the 
    //greeting method for the object we are currently busy with in this loop (actor).
    btnGreeting.addEventListener("click", function(e) {
    vehicle.greeting();//This greeting method was created using the constructor method.
    });
    
    //We also want to add a button that will display a more detailed message that displays the biography of the person object.
    let btnBio = document.createElement("button");
    btnBio.innerHTML = "Show More";

    
      /*We didn't create a method called Bio in the Person constructor function. We can also 
      add methods to objects outside of the constructor function. Below is an example of this. 
      Here we create a method called bio that we add to the current person object that we are working with in the loop */
      vehicle.bio = function() {
     alert('Buy the new' + " " + this.make + " " + this.model + " " +
      this.colour + " " +
      this.image + " " +
      this.registrationNumber + " " +
      this.price,
     );
    };
    //We add an eventListener that will recognise when btnBio has been clicked and will then call the 
    //Bio method for the object we are currently busy with in this loop (actor).
    btnBio.addEventListener("click", function(e) {
     vehicle.bio();
    });

    let lineBreak = document.createElement("br");

    //Once we have created all the elements we need to display on our HTML page, we append them to the Div element that we 
    //want to use to contain the information we want to display. 
    div.appendChild(imgCar);
    div.appendChild(btnBio);
    div.appendChild(btnGreeting);
    div.appendChild(lineBreak);
  });
};

loaded.addCars();





// function showText() {
//   document.getElementById("text").style.display = "inline";
//   document.querySelector("#text").style.display = "inline";
//   document.getElementsById("more").style.display = "none";
// }

 // function showText() {
      //    document.getElementById("text").style.display = "inline";
      //    document.querySelector("button").style.display = "inline";
      //    document.getElementsById("more").style.display = "none";
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
















// const body = document.body
// const dialog = document.createElement('dialog')

// class Cars {
//   constructor(make, model, color, image, registration, price) {
//     this.make = make
//     this.model = model
//     this.color = color
//     this.image = image
//     this.registration = registration
//     this.price = price
//   }

//   click() {
//     body.appendChild(dialog)
//     dialog.innerHTML = 'Colour: ' + this.color + ', Registration: ' + this.registration
//     dialog.setAttribute('open', 'open')
//   }
// }
// imgProfile.onclick = function showMore(event) {
//     car.showMore()
// }
















