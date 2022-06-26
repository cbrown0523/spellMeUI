//init speechsynth api
const synth = window.speechSynthesis;
const textInput = document.querySelector('.voice1');
const voiceSelect = document.querySelector('.voice-select');

let voices = [];
const getVoices = ()=>{
    voices = synth.getVoices();
  console.log(voices);
    
    voices.forEach(voice => {
    const option = document.createElement("option");
    option.textContent = voice.name + "(" + voice.lang + ")";
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
});
};
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}