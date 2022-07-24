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
        $('form').trigger("reset");
        $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
        });
       });
    //button left
    $(document).ready(function(){
    $(".al").click(function(){
      count--
       console.log(count)
       $('form').trigger("reset");
       $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
      });
    });


//on horn button click text to speech word



function submitForm() {
   //document.formu1.submit();
   // document.form.reset();

    }
    $(document).ready(function () {
        $("form").submit(function (event) {
             //e.preventDefault();
          
          var formData = {
            word: $("#floatingInput").val(),
            sampleWord:  words[count].term
          
          };
        event.preventDefault()
        $(".wordIn").empty();
          $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/spell/",
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

    

