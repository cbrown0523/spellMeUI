
const form = document.querySelector("form");

const text = form.querySelector(" textarea");

const speak = (message) => {
var speech = new SpeechSynthesisUtterance();

// Set the text and voice attributes.
speech.text = message;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

window.speechSynthesis.speak(speech);
};

form.addEventListener("submit", (e) => {
e.preventDefault();
speak(text.value);
});




$.ajax({
    method: "GET",
    url: 'http://localhost:8080/image/' ,
    // url: "http://localhost:8080/image/?q=cat",
    data: { 
        "q" : "book"
    },
}).done(function(data){
    console.log(data);
    $.map(data, function(i , image){
        // $('.img3').append($('<img />').attr('src', image.thumbnail));
        $('.img2').append( '<img src= "http://localhost:8080/image/"  image.thumbnail + ">');
       // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
    })
})

