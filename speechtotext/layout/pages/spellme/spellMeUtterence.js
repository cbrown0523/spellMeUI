function say(){
let txtInput = document.getElementById("floatingInput").value;
let speech = document.getElementById("icon2");
let message = new SpeechSynthesisUtterance("hi");
const voices = window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = function() {
    const updatedVoices = window.speechSynthesis.getVoices();
    };
const lastVoice = voices[voices.length - 1];

message.voice = lastVoice; // change voice

message.pitch = 1.8;
message.rate = .8;
message.text = txtInput;
window.speechSynthesis.speak(message)
}

    // As New SpeechSynthesizer()

    //text to speech read characters input
function myFunction1() {
    let wordBox = document.getElementById("floatingInput").value;
    let message = new SpeechSynthesisUtterance()
    for(let i = 0 ; i < wordBox.length; i++){
    message.text = wordBox[i];
    }
window.speechSynthesis.speak(message)

}
