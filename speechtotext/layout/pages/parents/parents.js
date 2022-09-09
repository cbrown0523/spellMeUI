$.ajax({
  method:'GET',
  url: 'http://localhost:8080/api/learner/all',
  headers: {
    Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
},
  dataType: 'json'
}).done(function(data){
  console.log(data);
  $.map(data, function(learners , i ){
      $('#list1').append("<a style = 'text-decoration: none' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
      )
      
     })
  
})

//if name is clicked how get the id and use as path param for endpoint
//how add href link to a individual user
// $.ajax({
//     method:'GET',
//     url: 'http://localhost:8080/api/learner/learner/{id}',
//     dataType: 'json'
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(learners , i ){
  
//         $('#list1').append("<a style = 'text-decoration: none;' href = ''><li class='list-group-item'>" + learners.name + "</li></a>"
//         )

//     })
// })



$(document).ready(function () {
  $("#add").click(function(event) {
    var formData = {
      name: $("#name").val(),
      grade: $("#grade").val()
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/learner/",
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
      data: formData,
      contentType: "application/json",
      data: JSON.stringify(formData),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      $('#list1').trigger("reset");
      console.log(data);
    });

  });
});

//ok
//  $(document).ready(function () {

//     $("#form1").submit(function (event) {
//         event.preventDefault();
//         ajaxSubmit();

//     });

// });

//   function ajaxSubmit() {

//     let field = {}
//    field["name"] = $("#name").val();

//     $("#add").prop("disabled", true);

//     $.ajax({
//         type: "GET",
//         contentType: "application/json",
//         url: "http://localhost:8080/api/learner/all",
//         data: JSON.stringify(field),
//         dataType: 'json',
//         cache: false,
//         timeout: 600000,
//         success: function (data) {

//             var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
//                 + JSON.stringify(data, null, 4) + "&lt;/pre&gt;";
//             $('#feedback').html(json);

//             console.log("SUCCESS : ", data);
//             $("#add").prop("disabled", false);

//         },
//         error: function (e) {

//             var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
//                 + e.responseText + "&lt;/pre&gt;";
//             $('#feedback').html(json);

//             console.log("ERROR : ", e);
//             $("#btn-search").prop("disabled", false);

//         }
//     });

//  }
$(document).ready(function () {
  $("#delete").click(function(event) {
    var formData = {
      name: $("#nameDel").val(),
    };
   

    $.ajax({
      type: "DELETE",
      url: "http://localhost:8080/api/learner/delete/name/" + formData.name,
            headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
      data: formData,
      contentType: "application/json",
      data: JSON.stringify(formData),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      $('#list1').trigger("reset");
      console.log(data);
    });

  });
});


// $(document).ready(function(event){
//   $(".list-group-item").click(function(){
//     $(this).hide();
//  // let name = event.target.className;
//  alert(event.target.className);
// $.ajax({
//     type: "DELETE",
//       headers: {
//         Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
//     },
//     url: "http://localhost:8080/api/learner/delete/name/?name=" + name,
//     contentType: "application/json",
//     data: name,
//     dataType: "json",
//     encode: true,
//   }).done(function (data) {
//     $('#list1').trigger("reset");
//     console.log(data);
//   });

// });
// });
// $(document).on("click", function(event){
//   $(this).hide();
//   event.preventDefault()
// //event.target.className.hide();
  
// })
