function say(){
    let txtInput = document.getElementById("text1").value;
    let speech = document.getElementById("btn1");
    let message = new SpeechSynthesisUtterance();
    message.text = txtInput;
    window.speechSynthesis.speak(message)
    }

    //change voice
    //change to say each letter spell it


    // $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/image/' + query,
//     dataType: 'html',
    
// }).done(function(data){
//     console.log(data).get[0];
//     $.map(data, function(learners , i ){
    
//         $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
//         )

//     })
// })
// let query = "apple";
// $.ajax({
//     url: 'http://localhost:8080/image/' + query,
//     type: 'get',
//     dataType: 'html',
//     async: false,
//     crossDomain: 'true',
//     success: function(data, status) {
//         console.log("Status: "+status+"\nData: "+data);
//         result = data;

//         /* creating image assuming data is the url of image */
//         let html ="";
        
//     } 
// });
// // $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>')
// let query = "apple";
// $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080/image/' ,
//     // url: "http://localhost:8080/image/?q=cat",
//     data: { 
//         "q" : "school"
//     },
//   }).done(function(data) {
//     console.log(data);
//   }).fail(function(err) {
//     console.log(err);
//   });
//on horn button click text to speech word
function say(){
    let txtInput = document.getElementById("floatingInput").value;
    let speech = document.getElementById("icon2");
    let message = new SpeechSynthesisUtterance();
    message.text = txtInput;
    window.speechSynthesis.speak(message)
    }

let blowhorn = document.getElementById("icon2");

    const input = document.querySelector('input');

    
    input.addEventListener( updateValue);
    function myFunction() {
        let wordBox = document.getElementById("floatingInput").value;
        // console.log(e.target.wordBox) ;
        // console.log(e.target.value) ;
  console.log(wordBox)
    }
    //text to speech read characters input
function myFunction1() {
    let wordBox = document.getElementById("floatingInput").value;
    let message = new SpeechSynthesisUtterance()
    for(let i = 0 ; i < wordBox.length; i++){
    message.text = wordBox[i];
    }
window.speechSynthesis.speak(message)

}
// function updateValue(e) {
// }
  

//     let txtInput = document.getElementsByClassName("wordIn").value;
//     console.log(txtInput)
//     let speech = document.getElementById("btn1");
//     let message = new SpeechSynthesisUtterance();
//     message.text = txtInput;
//     window.speechSynthesis.speak(message)
//     }
//     function say(){
//         let txtInput = document.getElementById("text1").value;
//         let speech = document.getElementById("btn1");
//         let message = new SpeechSynthesisUtterance();
//         message.text = txtInput;
//         window.speechSynthesis.speak(message)
//         }
    
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

// $(document).ready(function () {
//     var jsonURL = "productList.json";
//     $.getJSON(jsonURL, function (json) 
//     {
//       var imgList= "";
  
//       $.each(json.products, function () {
//         imgList += '<li><img src= "' + this.imgPath + '"></li>';
//       });
  
//      $('#dvProdList').append(imgList);
//     });
//   });
// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/api/',
//     dataType: 'json'
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(word , i ){
    
//         $('.displayW').append("<p id = 'spellWord'>"+ word.term.get() +"</p>"
//         )

//     })
// })


let words = [];
let count = 0;

//get api/terms
$.ajax({
    method:'GET',
    url: 'http://localhost:8080/api/',
    dataType: 'json'
}).done(function(data){
    console.log(data);
     words = data;
    $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
    })
    
    //button right
    $(document).ready(function(){
        $(".ar").click(function(){
            count++
        console.log(count)
        $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
        });
       });
   
       //button left
    $(document).ready(function(){
    $(".al").click(function(){
      count--
       console.log(count)
       $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
      });
    });

    

SVGFEDropShadowElement

let words = [];
let count = 0

//get api/terms
$.ajax({
    method:'GET',
    url: 'http://localhost:8080/api/',
    dataType: 'json'
}).done(function(data){
    console.log(data);
     words = data;
    $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
    })
    $(document).ready(function(){
        $(".ar").click(function(){
            count++
        console.log(count)
        $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
        });
       });
    //button left
    $(document).ready(function(){
    $(".al").click(function(){
      count--
      
       console.log(count)
       $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
      });
    });



    $.ajax({
    method:'GET',
    url: 'http://localhost:8080/image/' + query,
    dataType: 'html',
    
}).done(function(data){
    console.log(data).get[0];
    $.map(data, function(learners , i ){
    
        $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
        )

    })
})
let query = "apple";
$.ajax({
    url: 'http://localhost:8080/image/' + query,
    type: 'get',
    dataType: 'html',
    async: false,
    crossDomain: 'true',
    success: function(data, status) {
        console.log("Status: "+status+"\nData: "+data);
        result = data;

        /* creating image assuming data is the url of image */
        let html ="";
        
    } 
});
// $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>')
let query = "apple";
$.ajax({
    method: "GET",
    url: 'http://localhost:8080/image/' ,
    // url: "http://localhost:8080/image/?q=cat",
    data: { 
        "q" : "school"
    },
  }).done(function(data) {
    console.log(data);
  }).fail(function(err) {
    console.log(err);
  });

//on horn button click text to speech word

function say(){
    let txtInput = document.getElementById("floatingInput").value;
    let speech = document.getElementById("icon2");
    let message = new SpeechSynthesisUtterance();
    message.text = txtInput;
    window.speechSynthesis.speak(message)
    }


    //text to speech read characters input
function myFunction1() {
    let wordBox = document.getElementById("floatingInput").value;
    let message = new SpeechSynthesisUtterance()
    for(let i = 0 ; i < wordBox.length; i++){
    message.text = wordBox[i];
    }
window.speechSynthesis.speak(message)

}



// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/image/' + query,
//     dataType: 'html',
    
// }).done(function(data){
//     console.log(data).get[0];
//     $.map(data, function(learners , i ){
    
//         $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
//         )

//     })
// })
// let query = "apple";
// $.ajax({
//     url: 'http://localhost:8080/image/' + query,
//     type: 'get',
//     dataType: 'html',
//     async: false,
//     crossDomain: 'true',
//     success: function(data, status) {
//         console.log("Status: "+status+"\nData: "+data);
//         result = data;

//         /* creating image assuming data is the url of image */
//         let html ="";
        
//     } 
// });
// // $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>')
// let query = "apple";
// $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080/image/' ,
//     // url: "http://localhost:8080/image/?q=cat",
//     data: { 
//         "q" : "school"
//     },
//   }).done(function(data) {
//     console.log(data);
//   }).fail(function(err) {
//     console.log(err);
//   });

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

// $(document).ready(function () {
//     var jsonURL = "productList.json";
//     $.getJSON(jsonURL, function (json) 
//     {
//       var imgList= "";
  
//       $.each(json.products, function () {
//         imgList += '<li><img src= "' + this.imgPath + '"></li>';
//       });
  
//      $('#dvProdList').append(imgList);
//     });
//   });
// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/api/',
//     dataType: 'json'
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(word , i ){
    
//         $('.displayW').append("<p id = 'spellWord'>"+ word.term.get() +"</p>"
//         )

//     })
// })

    

