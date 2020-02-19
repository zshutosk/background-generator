var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector("#randomColor");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


randomColor.addEventListener("click", generateColor);

function generateColor () {
	color1.value = '#'+Math.random().toString(16).substr(2,6);
	color2.value = '#'+Math.random().toString(16).substr(2,6);
	setGradient()
}