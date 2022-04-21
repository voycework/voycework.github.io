//Create an empty array that we will use to store all the artist objects created.
var art = [];

// let body = document.getElementById("body")

// function myLoad(){
//     let clear = document.getElementById("clear")
//     // creating the all clear button
//     let clrButton = document.createElement('button')
//     clrButton.innerHTML = "Clear All"

//     // creat event listener to trigger if button is clicked.
//     clrButton.addEventListener('click', function clrAll(){
//         //clear the local storage
//         localStorage.clear()
//     });

//     //add some styling to position the clear all button
//     clrButton.style.display="block"
//     clrButton.style.margin = "5px"

//     // add button to HTML document
//     clear.appendChild(clrButton)
// }

function myLoad() {
    let htmlSelect = document.getElementById("artistList");
    htmlSelect.style.visibility = "hidden";

    if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("artists", JSON.stringify(art));
        localStorage.setItem("hasCodeRunBefore", true);
    } else {
        art = JSON.parse(localStorage.getItem("artists"));//Get the array of artist objects from localStorage and assign it to the array 'art'
        let i = 0;
        art.forEach(function(p) {//Loop through each artist (p) in the art array
            /*For each artist in the array create an option element that displays 
            that artist's name and add it to the select (dropdown) element on the HTML page */
            let optItem = document.createElement("option");
            optItem.innerHTML = p.newArtist;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {//Only make the select element visible once there is at least one artist object added that the user can select.
            htmlSelect.style.visibility = "visible";
        }
    }
// }

//Below we create the constructor function that will be used to create all artist objects.
function Artist(artist, title, album, genre, year) {
    this.artist = artist;
    this.title = title;
    this.album = album;
    this.genre = genre;
    this.year = year;
}

/* the function below will be called every time the user clicks on the button to add a artist on the 
HTML page. Each time this happens we will retrieve the data about the artist from the form on the HTML page
that the user has completed. We call the artist constructor function and pass through all this data as
arguments to create a new artist object. We then add the object to the array of people objects using the push method
(art.push). Because we want this information to be available accross page loads, we add the updated array of people to localStorage. */
function addArtist() {
    art = JSON.parse(localStorage.getItem("artists"));
    let newArtist = new Artist(
        document.getElementById("artName").value,
        document.getElementById("songName").value,
        document.getElementById("album").value,
        document.getElementById("genre").value,
        document.getElementById("year").value
    );
    art.push(newArtist);
    localStorage.artistData. JSON.stringify(art);

}

/* When the user chooses a different artist from the select (dropdown) element on the HTML page,
the function below will be called. 

This function adds a function called bio() to the artist object that 
the user has selected and then calls that method to execute it. 

We know which artist object the user has selected because the index of the array where the artist object is stored is passed through to this function.
Have a look at the HTML page to see how this information is passed through to this method. "ChangeActiveUser(this.value)" is 
used. 'this.value' refers to the value of the currently selected option element. Now notice in the function
myLoad() (above) that 'i', which is the index of the object element in the pers array, is assigned to each option element that 
we created when we added each option element to the select element as the page loaded. */
function ChangeActiveUser(indexOfArtistObj) {
    art[indexOfArtistObj].bio = function() {
        alert(
            "Enjoy the music of " +
            this.artist +
            " Title: " +
            this.title +
            " Album: " +
            this.album +
            " Genre: " +
            this.genre +
            " " +
            this.year + 
            "."
        );
    };
    art[indexOfArtistObj].bio();
}






// console.log(art)
// for (let i in art){
//     let table_row = document.createElement('tr')
//     let dltButton   = document.createElement('button')
//     dltButton.innerHTML = "Delete"
//     dltButton.addEventListener('click', function dltArtist(){
//         art.splice(i,1)
//         localStorage.artistData = JSON.stringify(art);

//     });

// for(let [key, value]of Object.entries(art[i])){
//     var div = document.createElement('th')
//     div.innerHTML = value;
//     div.oninput = function(e){
//         art[i][key] = e.target.innerHTML(art);
//     }
//     table_row.appendChild(div)
// }

// body.appendChild(table_row)
// body.appendChild(dltButton)
// }