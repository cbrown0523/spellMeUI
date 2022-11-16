let words = [];
let count = 0


//get api/terms
$.ajax({
  method:'GET',
  url: 'http://localhost:8080/api/term/',
  headers: {
    //Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
},
  async: false,
  dataType: 'json'
}).done(function(data){
  console.log(data);
  words = data;
  
  $('#spellWord').html( "<p id = 'spellWord'>" + words[count]["term"]  +"</p>")  
})

//button right
$(document).ready(function(){
  $(".ar").click(function(){
    $("#coverimg").hide()
    console.log(words[++count]["term"] )
    console.log("up" + count)
   
    if ($("form").val().length !=0){
      words_attempted = true;
    } else {
        words_attempted = "false"
      }
  
    
    $('form').trigger("reset");
    $('#spellWord').html( "<p id = 'spellWord'>"+ words[count]["term"]  +"</p>")  

    getImage()
  });

  //button left
 
  $(".al").click(function(){
    $("#coverimg").hide()
    console.log(words[--count]["term"] )
      console.log("down" + count)
      $('form').trigger("reset");
      $('#spellWord').html( "<p id = 'spellWord'>"+ words[count]["term"]  +"</p>")        
      getImage()
    });
});


//on horn button click text to speech word
let getImage = function (){
$.ajax({
method: "GET",
url: 'http://localhost:8080/image/' ,
headers: {
  Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
},
// async: false,

data: { 
"q":"clip%20art%20" + words[count]["term"] 
},

}).done(function(data){
console.log("counting123" + count)
console.log("image")
console.log(data);
$('.img2').html(`<img src="${data.suggested_searches[0].thumbnail}" "height = "250px" width = "200px">`);
// ${data.suggested_searches[0].thumbnail}
$.map(data, function(i , image){
// $('.img3').append($('<img />').attr('src', image.thumbnail));
// $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
})
})
}

function submitForm() {
$('form').submit();
//document.form.reset();
}
  $(document).ready(function () {
      $("form").submit(function (event) {
            //e.preventDefault();
        
        var formData = {
          word: $("#floatingInput").val(),
          sampleWord:words[count]["term"]
        
        };
      event.preventDefault()
     $(".wordIn").empty();
        $.ajax({
          type: "POST",
          url: "http://localhost:8080/api/spell/",
          headers: {
            Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
        },
          data: formData,
          contentType: "application/json",
          data: JSON.stringify(formData),
          dataType: "json",
          encode: true,
        }).done(function (data) {
          console.log(data);
        });
    
      });
    });
    // getImage()
  
    //define

// $.ajax({
// method: "GET",
// url: 'http://localhost:8080/api/word/' ,
// headers: {  'Access-Control-Allow-Origin': 'https://developer.wordnik.com' },
// // async: false,header 
// data: { 
//   "word":"cat" 
// },

// }).done(function(data){
// console.log(data);
// // $('.defTxt').html(`<p>"${data.text}" <p>`);
// })
  

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

//   $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080/image/' ,
//     // url: "http://localhost:8080/image/?q=cat",
//     data: { 
//         "q" : "book"
//     },
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(i , image){
//         // $('.img3').append($('<img />').attr('src', image.thumbnail));
//         $('.img2').append( '<img src= "http://localhost:8080/image/"  image.thumbnail + ">');
//        // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
//     })
// })

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