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
    let wordlistK = ["make", "they", "too", "jump", "move", "run", "two", "again", "help", "new", "there", "she", "so", "soon", "that", "there", "use", "could", "live", "one", "then", "three"]
    for(i = 0 ; i < wordlistK.length ; i++){
        let newWord = document.querySelector(".addNewKWord");
       let input = document.createElement("input");
       input.setAttribute("type","checkbox");
       input.setAttribute("value", wordlistK[i]);
       input.classList.add("checkbox");
       input.id = wordlistK[i];
       let label = document.createElement("label");
        let li = document.createElement('li');
       li.className = `list-group-item ${wordlistK[i]} `  ;
   
       li.innerHTML = wordlistK[i];
       new1 = newWord.appendChild(li);
       new2 = new1.appendChild(label);
       new3 = new2.appendChild(input);
       }
       
}
function wordListPK(){
    let wordlistPK = ["two", "sad", "mat", "rut", "kit", "pin", "fig", "bus", "bee", "one", "gag", "tag", "see", "car", "sob", "all", "mob", "bye", "hen", "bag", "bug", "ask"]
    for(i = 0 ; i < wordlistPK.length ; i++){
     let newWord = document.querySelector(".addNewPKWord");
    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("value", wordlistPK[i]);
    input.classList.add("checkbox");
    input.id = wordlistPK[i];
    let label = document.createElement("label");
     let li = document.createElement('li');
    li.className = `list-group-item ${wordlistPK[i]} `  ;

    li.innerHTML = wordlistPK[i];
    new1 = newWord.appendChild(li);
    new2 = new1.appendChild(label);
    new3 = new2.appendChild(input);
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
       input.classList.add("checkbox");
       input.id = wordlistF[i];
       let label = document.createElement("label");
        let li = document.createElement('li');
       li.className = `list-group-item ${wordlistF[i]} `  ;
   
       li.innerHTML = wordlistF[i];
       new1 = newWord.appendChild(li);
       new2 = new1.appendChild(label);
       new3 = new2.appendChild(input);
       }
       
    
}

wordListPK();
wordListKind();
wordListFir();


})();

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
   let label = document.createElement("label");
    let li = document.createElement('li');
   li.className = `list-group-item ${word} `  ;

   li.innerHTML = word;
   new1 = newWord.appendChild(li);
   new2 = new1.appendChild(label);
   new3 = new2.appendChild(input);
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
  $(document).ready(function(){
    $(".cardF").onload(function(){
      $(".addNewFWord").hide("slow");
    });
  });
  $('li').click( function() {
    $(this).attr("checked", true);
});


