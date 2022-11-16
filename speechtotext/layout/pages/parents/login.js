$(document).ready(function () {
    $("#loginform").submit(function(event) {
        event.preventDefault();
      var formData = {
        username: $("#username").val(),
        password: $("#password").val()
      };
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/auth/signin",
    //     headers: {
    //       Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    //   },
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
  //localstorage

// $(document).ready(function () {
//     $("#loginform").submit(function(event) {
//         var username = $("#username").val();
//         var password = $("#password").val();
  
//       $.ajax({
//         type: "POST",
//         url: " http://localhost:8080/api/auth/signup",
//         contentType: "application/json",
//         // headers: {
//         // Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
//         // },
//         data: '{"username": "' + username + '", "password" : "' + password + '"}',
//         dataType: "json",
//         encode: true,
//         success: function (){
//             alert('welcome');
//             }
//       })
  
//     });
//   });

//   $.ajax({
//     type: "POST",
//     url: " http://localhost:8080/api/auth/signup",
//     contentType: "application/json",
//     data: '{"username": "' + username + '", "password" : "' + password + '"}',
//     dataType: "json",
//     encode: true,
//     success: function (){
//         alert('welcome');
//         }
//   })



  