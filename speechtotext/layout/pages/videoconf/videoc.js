

{/* <script src="https://cdn.metered.ca/sdk/frame/1.4.2/sdk-frame.min.js"></script>
<script>
    var frame = new MeteredFrame(); 
    frame.init({
        roomURL: "spellme.metered.live/spellme",
    }, document.getElementById("metered-frame"));
</script>
      
        
   
<script src="//cdn.metered.ca/sdk/video/1.4.3/sdk.min.js"></script> */}


// npm install -g live-server
// $ live-server --port=8000


function fire_ajax_submit() {
    
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/tutorSearch/" ,
        data: { 
            "q": $(".locationTxt").val()
            },
        dataType: 'json',
        cache: false,
        success: function (data) {
        console.log("SUCCESS : ", data);

   //    $.map(data[0], function(key , val){
  
//   alert("value is" + val );
//   alert("key is" + key)
//     })
        //$('#vidC').html(`<iframe src=${data.local_results.more_locations_link} "height = "250px" width = "200px"></iframe>`);
        //     $('#p3').html(`<p id = "p3">${data.local_results.places[0].position} </p>`);
        //     $('#p4').html(`<p id = "p4">${data.local_results.places[0].title} </p>`);
        //     $('#p5').html(`<p id = "p5">${data.local_results.places[0].description} </p>`);
        //     $('#p6').html(`<p id = "p6">${data.local_results.places[0].rating} </p>`);
        //     $('#p7').html(`<p id = "p7">${data.local_results.places[0].type} </p>`);
        //     $('#p8').html(`<p id = "p8">${data.local_results.places[0].hours} </p>`);
        //     $('#p9').html(`<p id = "p9">${data.local_results.places[0].address} </p>`);
        //     //$('#p10').html(`<p id = "p10"> ${data.local_results.places[0].website}</p>`);
          
            //$('#p10').html(`<a href = ${data.local_results.places[0].website}></a>`);
          
            $('#p11').html(`<a id= "link1 " href = ${data.local_results.more_locations_link}>Find Tutor</a>`);
            $('#p12').html(`<img src=${data.local_map.image} "height = "450px" width = "400px">`);


        },
      
    });

}


$(document).ready(function () {

    $("#submit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();

    });

});

// $(document).ready(function () {
//     $("form").submit(function (event) {
//           //e.preventDefault();
      
//     //    var formData = {
//     //         q : $(".locationTxt").val(), 
//     //       };
//     var $loc = $(".locationTxt").val();
//       $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/tutorSearch/" ,
//         data: $loc,
//         contentType: "application/json",
//         data: JSON.stringify($loc),
//         dataType: "json",
//         encode: true,
//       }).done(function (data) {
//         console.log(data);
//         $('#p11').html(`<a href = ${data.local_map.link}>Link</a>`);
//         $('#p12').html(`<img src=${data.local_map.image} "height = "250px" width = "200px">`);
//       });
  
//     });
//   });



        
   


    