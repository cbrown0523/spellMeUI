
const form = document.querySelector("form");

const text = form.querySelector(" textarea");

const speak = (message) => {
var speech = new SpeechSynthesisUtterance();

// Set the text and voice attributes.
speech.text = message;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

window.speechSynthesis.speak(speech);
};

form.addEventListener("submit", (e) => {
e.preventDefault();
speak(text.value);
});

