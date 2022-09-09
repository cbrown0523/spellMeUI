$(document).ready(function() {
  $("form").submit(function (event) {
       // e.preventDefault();
    
       var name =  $("#name1").val();

       var email = $("#InputEmail").val();
       
       function make_base_auth(user, password) {
         var tok = user + ':' + password;
         var hash = btoa(tok);
         return "Basic " + hash;
       }
       $.ajax
         ({
           type: "POST",
           url: "http://localhost:8080/api/user/",
           dataType: 'json',
           async: false,
           data: '{}',
           beforeSend: function (xhr){ 
               xhr.setRequestHeader('Authorization', make_base_auth(name , email)); 
           },
           success: function (){
               alert('Thanks for your comment!'); 
           }
       });

  });
});