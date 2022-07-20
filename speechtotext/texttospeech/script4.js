function say(){
    let txtInput = document.getElementById("text1").value;
    let speech = document.getElementById("btn1");
    let message = new SpeechSynthesisUtterance();
    message.text = txtInput;
    window.speechSynthesis.speak(message)
    }

    //change voice
    //change to say each letter spell it