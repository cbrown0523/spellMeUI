// /
// let words = [];
// var count = 0;
// //get api/terms
// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/api/term/',
//     dataType: 'json',
//       async: false,
//     success: function(data){
//      words = data
     

//  $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//     }
   
//   })         
//     $(document).ready(function(){
//         $(".ar").click(function(){
   
//           for(let i = 0 ; i < words ; i++){  
//             console.log(words["term"] )
          
//            } 
//         $('form').trigger("reset");
//          $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//       });
//        });
       
//     //button left
//     $(document).ready(function(){
//     $(".al").click(function(){
   
//       for(let i = words[count--].length ; i  > 0 ; i--){  
      
//        words[count]["term"][i] 
      
//       }
//         console.log("down" + count--)
//        $('form').trigger("reset");
//        $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//       });
//     });
// //on horn button click text to speech word
// function submitForm() {
//    //document.formu1.submit();
//    // document.form.reset();
// count++
//     }
//     $(document).ready(function () {
//         $("form").submit(function (event) {
//              //e.preventDefault();
          
//           var formData = {
//             word: $("#floatingInput").val(),
//             sampleWord: words[count].term
           
//           }; 
//           console.log("count123" + words[count]["term"])
//         event.preventDefault()
//         $(".wordIn").empty();
//           $.ajax({
//             type: "POST",
//             url: "http://localhost:8080/api/spell/",
//             data: formData,
//             contentType: "application/json",
//             data: JSON.stringify(formData),
//             dataType: "json",
//             encode: true,
//           }).done(function (data) {
//             console.log(data);
//           });
      
//         });
//       });

    
// // $.ajax({
// //     method:'GET',
// //     url: 'http://localhost:8080/image/' + query,
// //     dataType: 'html',
    
// // }).done(function(data){
// //     console.log(data).get[0];
// //     $.map(data, function(learners , i ){
    
// //         $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
// //         )

// //     })
// // })
// // let query = "apple";
// // $.ajax({
// //     url: 'http://localhost:8080/image/' + query,
// //     type: 'get',
// //     dataType: 'html',
// //     async: false,
// //     crossDomain: 'true',
// //     success: function(data, status) {
// //         console.log("Status: "+status+"\nData: "+data);
// //         result = data;

// //         /* creating image assuming data is the url of image */
// //         let html ="";
        
// //     } 
// // });
// // 
// // $(document).ready(function(){
// //   $("#spellWord").click(function(){
// //     alert($(ww).text());
// //   });
// // })

//   $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080/image/' ,
//     // async: false,
//     // url: "http://localhost:8080/image/?q=cat",
//     // data: "{'q':'" + document.getElementById('spellWord').val()  + "'}"    
//     // data: "{'q':'" +  words[count].term + "'}"   console.log() 
//     data: { 
//       "q":words[count]["term"] 
//   },
 
// }).done(function(data){
//   console.log("image")
//     console.log(data);
//     $('.img2').append(`<img src="${data.suggested_searches[0].thumbnail}" "height = "250px" width = "200px">`);
//     // ${data.suggested_searches[0].thumbnail}
//     $.map(data, function(i , image){
//         // $('.img3').append($('<img />').attr('src', image.thumbnail));
//        // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
//     })
// })

  
// // var imgUrl = 'http://localhost:8080/image/',
// //     wordUrl = 'http://localhost:8080/api/term/';

// // $.when(
// //     $.get(imgUrl),
// //     $.get(wordUrl)
// // ).then(function(img, data) {
// //   word = data;
// //   console.log('img' +  word[0] );
// // }).fail(function(err) {
// //   console.log('Opps', err);
// // });
// // $.when($.ajax({
// //   method:'GET',
// //   url: 'http://localhost:8080/api/term/',
// //   dataType: 'json'
// // }).done(function(data){

// //    words = data;
// //   $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  

// // }), $.ajax({
// //   method: "GET",
// //   url: 'http://localhost:8080/image/' ,
// //   // url: "http://localhost:8080/image/?q=cat",
// //   // data: "{'q':'" + document.getElementById('spellWord').val()  + "'}"    
// //   // data: "{'q':'" +  words[count].term + "'}"    
// //   data: { 
// //     "q":  words[count].term
// // },
// // }).done(function(data){
// // console.log("image")
// //   console.log(data);
// //   $('.img2').append(`<img src="${data.suggested_searches[0].thumbnail}" "height = "250px" width = "200px">`);
// //   // ${data.suggested_searches[0].thumbnail}
// //   $.map(data, function(i , image){
// //       // $('.img3').append($('<img />').attr('src', image.thumbnail));
// //      // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
// //   })
// // })).then(function (resp1, resp2) {
// //   console.log("image")});






// let words = [];
// var count = 0;
// var aWord ;

// //get api/terms
// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/api/term/',
//     async: false, 
//     dataType: 'json',
    
//     success: function(data){
//      words = data
     

//  $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//     }
   
//   })         
//     $(document).ready(function(){
//         $(".ar").click(function(){
//           console.log("z" + count)
//           count ++
//           console.log("ar" + count)
//           for(let i = 0 ; i < words[count].length ; i++){  
//             words[count]["term"][i] 
//            }
         
//         console.log(count)
//         console.log("count" + words[count]["term"])
//         $('form').trigger("reset");
//          $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//          $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//       });
//        });
//        console.log("ard" + count)

//     //button left
//     $(document).ready(function(){
//     $(".al").click(function(){
//       count--
//        console.log(count)
//        $('form').trigger("reset");
//        $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  
//       });
//     });
// //on horn button click text to speech word
// console.log("arddd" + count)
// function submitForm() {
//    //document.formu1.submit();
//    // document.form.reset();

//     }
//     $(document).ready(function () {
//         $("form").submit(function (event) {
//              //e.preventDefault();
          
//           var formData = {
//             word: $("#floatingInput").val(),
//             sampleWord: words[count].term
           
//           }; 
//         event.preventDefault()
//         $(".wordIn").empty();
//           $.ajax({
//             type: "POST",
//             url: "http://localhost:8080/api/spell/",
//             data: formData,
//             contentType: "application/json",
//             data: JSON.stringify(formData),
//             dataType: "json",
//             encode: true,
//           }).done(function (data) {
//             console.log(data);
//           });
      
//         });
//       });
//       console.log("ard" + count)   
// // $.ajax({
// //     method:'GET',
// //     url: 'http://localhost:8080/image/' + query,
// //     dataType: 'html',
    
// // }).done(function(data){
// //     console.log(data).get[0];
// //     $.map(data, function(learners , i ){
    
// //         $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
// //         )

// //     })
// // })
// // let query = "apple";
// // $.ajax({
// //     url: 'http://localhost:8080/image/' + query,
// //     type: 'get',
// //     dataType: 'html',
// //     async: false,
// //     crossDomain: 'true',
// //     success: function(data, status) {
// //         console.log("Status: "+status+"\nData: "+data);
// //         result = data;

// //         /* creating image assuming data is the url of image */
// //         let html ="";
        
// //     } 
// // });
// // 
// // $(document).ready(function(){
// //   $("#spellWord").click(function(){
// //     alert($(ww).text());
// //   });
// // })
// console.log("dfdff" + words[count]["term"] )
//   $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080/image/' ,
//     // async: false,
//     // url: "http://localhost:8080/image/?q=cat",
//     // data: "{'q':'" + document.getElementById('spellWord').val()  + "'}"    
//     // data: "{'q':'" +  words[count].term + "'}"   console.log() 
//     data: { 
//       "q":words[count]["term"] 
//   },
 
// }).done(function(data){
//   console.log("image")
//     console.log(data);
//     $('.img2').append(`<img src="${data.suggested_searches[0].thumbnail}" "height = "250px" width = "200px">`);
//     // ${data.suggested_searches[0].thumbnail}
//     $.map(data, function(i , image){
//         // $('.img3').append($('<img />').attr('src', image.thumbnail));
//        // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
//     })
// })

  
// // var imgUrl = 'http://localhost:8080/image/',
// //     wordUrl = 'http://localhost:8080/api/term/';

// // $.when(
// //     $.get(imgUrl),
// //     $.get(wordUrl)
// // ).then(function(img, data) {
// //   word = data;
// //   console.log('img' +  word[0] );
// // }).fail(function(err) {
// //   console.log('Opps', err);
// // });
// // $.when($.ajax({
// //   method:'GET',
// //   url: 'http://localhost:8080/api/term/',
// //   dataType: 'json'
// // }).done(function(data){

// //    words = data;
// //   $('#spellWord').html( "<p id = 'spellWord'>"+ words[count].term  +"</p>")  

// // }), $.ajax({
// //   method: "GET",
// //   url: 'http://localhost:8080/image/' ,
// //   // url: "http://localhost:8080/image/?q=cat",
// //   // data: "{'q':'" + document.getElementById('spellWord').val()  + "'}"    
// //   // data: "{'q':'" +  words[count].term + "'}"    
// //   data: { 
// //     "q":  words[count].term
// // },
// // }).done(function(data){
// // console.log("image")
// //   console.log(data);
// //   $('.img2').append(`<img src="${data.suggested_searches[0].thumbnail}" "height = "250px" width = "200px">`);
// //   // ${data.suggested_searches[0].thumbnail}
// //   $.map(data, function(i , image){
// //       // $('.img3').append($('<img />').attr('src', image.thumbnail));
// //      // $('.img2').append($("<img src= 'http://localhost:8080/image/' + image[0].thumbnail " + ">" ))
// //   })
// // })).then(function (resp1, resp2) {
// //   console.log("image")});/ 