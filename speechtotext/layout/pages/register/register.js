// $(document).ready(function(){
//     $("form").on("submit", function(event){
//         event.preventDefault();
 
//         var formValues= $(this).serialize();
 
//         $.post("http://localhost:8080/api/user/", formValues, function(data){
//             // Display the returned data in browser
//             console.log(data);
//         });
//     });
// });


$(document).ready(function() {
    $("form").submit(function (event) {
         // e.preventDefault();
      
      var formData = {
        name: $("#name").val(),
        email:$("#InputEmail").val(),
      };
    //event.preventDefault()
      $.ajax({
        type: "POST",
        url: " http://localhost:8080/api/user/",
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

// $(document).ready(function () {
//       $("form").submit(function (event) {
//         //e.preventDefault();
    
//     var formData = {
//       word: $("#floatingInput").val(),
//       sampleWord:words[count]["term"]
    
//     };
//   event.preventDefault()
//  $(".wordIn").empty();
//     $.ajax({
//       type: "POST",
//       url: "http://localhost:8080/api/spell/",
//       data: formData,
//       contentType: "application/json",
//       data: JSON.stringify(formData),
//       dataType: "json",
//       encode: true,
//     }).done(function (data) {
//       console.log(data);
//     });

//   });
// });
//   let formData = {
//     name: $("#name").val(),
//     email:$("InputEmail").val(),
//   };
//   $.ajax({
//     type: "POST",
//     url: " http://localhost:8080/api/user/",
//     data: formData,
//     dataType: "json",
//    }).done(function (data) {
//         console.log(data);
    
//   });
//   $("button").click(function(){
//     $("p").hide(1000);
//   });

