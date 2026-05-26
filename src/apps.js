if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("sw.js")
.then(() => {

console.log("PWA activa");

});

});

}

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light");
document.body.classList.toggle("dark");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

toggle.innerHTML = "☀️";

}else{

localStorage.setItem("theme","dark");

toggle.innerHTML = "🌙";

}

});

if(localStorage.getItem("theme")==="light"){

document.body.classList.remove("dark");
document.body.classList.add("light");

toggle.innerHTML = "☀️";

}

function searchAI(){

const prompt = document.getElementById("prompt").value;

const box = document.getElementById("aiBox");

const response = document.getElementById("aiResponse");

box.classList.remove("hidden");

response.innerHTML = `
Basado en:
<strong class="text-violet-400">"${prompt}"</strong>,
Ticketfy AI recomienda festivales electrónicos inmersivos, conciertos premium y experiencias visuales futuristas en Santiago.
`;

}