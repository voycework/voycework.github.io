// js for toggle Menu

let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right ="0";
}
function hideMenu(){
    navLinks.style.right ="0";
}



// const name = document.getElementById('name').value;
// const email = document.getElementById("email").value;
const formBtn = document.getElementById("form-btn");

formBtn.addEventListener('click', sendEmail);



    function sendEmail() {
        
        Email.send({
        Host : "smtp.gmail.com",
        Username : "mfundomatsha@gmail.com",
        Password : "Mfundo6221@@",
        To : 'mfundovoycempati@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body :  "Name: "+ document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
        }).then(
        message => alert("Message Sent Successfully")
        );
    }