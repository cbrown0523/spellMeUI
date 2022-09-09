(function (){

//populate list with word items

// function add(){
// <input type="checkbox" name="bootstrap" value="bootstrap">
// 	<label>Bootstrap</label><br><br>
// 	<button type="button">Submit</button>
// }
// KWordRemove(){
// let KWordRemove = document.getElement

// for(i = 0 ; i < wordlistPK.length ; i++){
//     if()
// }
// };

function wordListKind(){
  let wordlistK = ["two", "sad", "mat", "rut", "kit", "pin", "fig", "bus", "bee", "one", "gag", "tag", "see", "car", "sob", "all", "mob", "bye", "hen", "bag", "bug", "ask"]
  for(i = 0 ; i < wordlistK.length ; i++){
        let newWord = document.querySelector(".addNewKWord");
       let input = document.createElement("input");
       input.setAttribute("type","checkbox");
       input.setAttribute("value", wordlistK[i]);
       input.id = wordlistK[i];
        let li = document.createElement('li');
       li.className = `list-group-item ${wordlistK[i]} `  ;
   
       li.innerHTML = wordlistK[i];
      new1 = newWord.appendChild(li);
       new2 = new1.appendChild(input);
       }
       }
      

function wordListPK(){
  let wordlistPK = ["make", "they", "too", "jump", "move", "run", "two", "again", "help", "new", "there", "she", "so", "soon", "that", "there", "use", "could", "live", "one", "then", "three"]
  for(i = 0 ; i < wordlistPK.length ; i++){
     let newWord = document.querySelector(".addNewPKWord");
    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("value", wordlistPK[i]);
    input.id = wordlistPK[i];
     let li = document.createElement('li');
    li.className = `list-group-item ${wordlistPK[i]} `  ;
    li.innerHTML = wordlistPK[i];
    new1 = newWord.appendChild(li);
     new2 = new1.appendChild(input);
    }
    
    
}
//db
function wordListFir(){
    let wordlistF = ["even", "felt", "camp", "land", "few", "front", "hundred","country", "kept", "grew", "finger", "across", "feel", "cause", "enough", "center", "different", "knew", "between", "gone"]
    for(i = 0 ; i < wordlistF.length ; i++){
        let newWord = document.querySelector(".addNewFWord");
       let input = document.createElement("input");
       input.setAttribute("type","checkbox");
       input.setAttribute("value", wordlistF[i]);
       input.id = wordlistF[i];
        let li = document.createElement('li');
       li.className = `list-group-item ${wordlistF[i]} `  ;
       li.innerHTML = wordlistF[i];
       new1 = newWord.appendChild(li);
       new2 = new1.appendChild(input);
       }
  
}

wordListPK();
wordListKind();
wordListFir();


})();
 //remove checked first grade
$(document).ready(function () { 

$(".removeFg").click(function (event) {
 let term = $("input:checkbox:checked").val()
 $("input:checkbox:checked").closest("li").remove();
 console.log("ok")
      //e.preventDefault();
    
//event.preventDefault()
$(".wordIn").empty();
  $.ajax({
    type: "DELETE", 
    data: term,
    url: "http://localhost:8080/api/term/delete/word/" + term ,
    headers: {
      Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
  },
   
    contentType: "application/json",
    data: JSON.stringify(term),
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log(data);
 
  });
  

});
});

//remove checked kind
// $(document).ready(function () { 

//   $(".removeK").click(function (event) {
//    let term = $("input:checkbox:checked").val()
//    console.log("ok")
//    alert($("input:checkbox:checked").val())
//   $(".wordIn").empty();
//     $.ajax({
//       type: "DELETE", 
//       data: term,
//       url: "http://localhost:8080/api/term/delete/word/" + term ,
     
//       contentType: "application/json",
//       data: JSON.stringify(term),
//       dataType: "json",
//       encode: true,
//     }).done(function (data) {
//       console.log(data);
   
//     });
  
//   });
//   });

  //remove checked prek
  $(document).ready(function () { 

    $(".removePk").click(function (event) {
     let term3 = $("input:checkbox:checked").val()
     $("input:checkbox:checked").closest("li").remove();
     event.preventDefault();
    $(".wordIn").empty();
      $.ajax({
        type: "DELETE", 
        data: term3,
        url: "http://localhost:8080/api/term/delete/word/" + term3 ,
        headers: {
          Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
      },
       
        contentType: "application/json",
        data: JSON.stringify(term3),
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
     
      });
    
    });
    });

// $(document).ready(function () {
//   $(".removeK").click(function (event) {
//         //e.preventDefault();
//        // var $li = $(this);
// let term ="one"


//     //  let formData = {
//     //     //term: $('input[type=checkbox]:checked').val()
//     //     term: "#then"
//     //   };
//   //event.preventDefault()

//     $.ajax({
//       type: "DELETE",
    
//       url: "http://localhost:8080/api/term/delete/word/" + term ,
//         data: term,
//       contentType: "application/json",
//      data: JSON.stringify(term),
//       dataType: "json",
//       encode: true,
//     }).done(function (data) {
//       console.log(formData.term);
//     });

//   });
// });

//kindergarten delete
$(document).ready(function () {
  $(".removeK").click(function (event) {

let term = $("#wordK").val()

console.log("ok")
   
    $.ajax({
      type: "DELETE",
    
      url: "http://localhost:8080/api/term/delete/word/" + term ,
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
        data: term,
      contentType: "application/json",
     data: JSON.stringify(term),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(formData.term);
    });

  });
});

//prek delete
$(document).ready(function () {
  $(".removePk").click(function (event) {
        //e.preventDefault();
       // var $li = $(this);
let term = $("#wordPK").val()
    //  let formData = {
    //     //term: $('input[type=checkbox]:checked').val()
    //     term: "#then"
    //   };
  //event.preventDefault()

    $.ajax({
      type: "DELETE",
    
      url: "http://localhost:8080/api/term/delete/word/" + term ,
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
        data: term,
      contentType: "application/json",
     data: JSON.stringify(term),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(formData.term);
    });

  });
});

//delete firstgrade
$(document).ready(function () {
  $(".removeFg").click(function (event) {
let term = $("#wordF").val()
  
    $.ajax({
      type: "DELETE",
    
      url: "http://localhost:8080/api/term/delete/word/" + term ,
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
        data: term,
      contentType: "application/json",
     data: JSON.stringify(term),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(formData.term);
      
    });

  });
});


// //getting cors error 
// $(document).ready(function () { 
//   //use word even example
//   $("#camp").click(function (event) {
//       //e.preventDefault();
//     var $li = $(this);
//     //  let formData = {
//     //     term: sThisVal,
//     //   };
// event.preventDefault()

//   $.ajax({
//     type: "DELETE",
//     url: "http://localhost:8080/api/term/delete/words" ,
//     data: $li,
//     contentType: "application/json",
//    data: JSON.stringify($li),
//     dataType: "json",
//     encode: true,
//   }).done(function (data) {
//     console.log(data);
//     console.log($div);
//   });

// });
// });


$(document).ready(function () { 

  $(".removeK").click(function (event) {
   let term2 = $("input:checkbox:checked").val()
   $("input:checkbox:checked").closest("li").remove();
   console.log("ok1")
        event.preventDefault();
      
  //event.preventDefault()
  $(".wordIn").empty();
    $.ajax({
      type: "DELETE", 
      data: term2,
      url: "http://localhost:8080/api/term/delete/word/" + term2 ,
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
     
      contentType: "application/json",
      data: JSON.stringify(term2),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
   
    });
    
  
  });
  });
  

$(document).ready(function () {
  $(".addWordF").click(function (event) {
        //e.preventDefault();
    
    var formData = {
      term: $("#wordF").val(),
      grade: "firstgrade"
   
    };
  event.preventDefault()
 $(".wordIn").empty();
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/term/",
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
$(document).ready(function () {
  $(".addWordK").click(function (event) {
        //e.preventDefault();
    
    var formData = {
      term: $("#wordK").val(),
      grade: "kindergarten"
    };
  event.preventDefault()
 $(".wordIn").empty();
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/term/",
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
$(document).ready(function () {
  $(".addWordPk").click(function (event) {
        //e.preventDefault();
    
    var formData = {
      term: $("#wordPK").val(),
      grade: "preK"
   
    };
  event.preventDefault()
 $(".wordIn").empty();
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/term/",
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
function removeWord() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    Array.prototype.forEach.call(checkboxes, function(checkbox) {
     checkbox.closest('li').remove();
    });
 }
 
//on button click add a new word to the list
function addWordPK(){
    let newWord = document.querySelector(".addNewPKWord");
    let word = document.getElementById("wordPK").value;
    let input = document.createElement("input");
    
   input.setAttribute("type","checkbox");
   input.setAttribute("value", word);
   input.classList.add("checkbox");

   input.id = word;
   let label = document.createElement("label");

    let li = document.createElement('li');
   li.className = `list-group-item ${word} `  ;

   li.innerHTML = word;
   new1 = newWord.appendChild(li);
   new2 = new1.appendChild(label);
   new3 = new2.appendChild(input);
   }
   function addWordK(){
    let newWord = document.querySelector(".addNewKWord");
    let word = document.getElementById("wordK").value;
    let input = document.createElement("input");
   input.setAttribute("type","checkbox");
   input.setAttribute("value", word);
   input.classList.add("checkbox");
   input.id = word;
    let li = document.createElement('li');
   li.className = `list-group-item ${word} `  ;

   li.innerHTML = word;
   new1 = newWord.appendChild(li);
   new2 = new1.appendChild(input);
   }

 function addWordF(){
    let newWord = document.querySelector(".addNewFWord");
    let word = document.getElementById("wordF").value;
    let input = document.createElement("input");
   input.setAttribute("type","checkbox");
   input.setAttribute("value", word);
   input.classList.add("checkbox");
   input.id = word;
   let label = document.createElement("label");
    let li = document.createElement('li');
   li.className = `list-group-item ${word} `  ;

   li.innerHTML = word;
   new1 = newWord.appendChild(li);
   new2 = new1.appendChild(label);
   new3 = new2.appendChild(input);
   }
   
    // let newWord = document.querySelector(".addNewWord");
    // let li = document.createElement('li');
    // li.className = "list-group-item";
    // li.innerHTML = "add a new word";
    // newWord.appendChild(li);

    // li.innerHTML = wordlistPK[i];
    // new1 = newWord.appendChild(label);
    // new2 = new1.appendChild(li);
    // new3 = new2.appendChild(input);
   

//wordlist sliders
$(document).ready(function(){
    $(".slider1").click(function(){
      $(".addNewPKWord").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".slider2").click(function(){
      $(".addNewKWord").slideToggle("slow");
    });
  });
$(document).ready(function(){
    $(".slider3").click(function(){
      $(".addNewFWord").slideToggle("slow");
    });
  });
  // $(document).ready(function(){
  //   $(".cardF").onload(function(){
  //     $(".addNewFWord").hide("slow");
  //   });
  // });
  $('li').click( function() {
    $(this).attr("checked", true);
});



