// import randomcolor from "randomcolor"

const fontsArr = [
    "Impact,Charcoal,sans-serif",
    "Brush Script MT, cursive",
    "Luminari, fantasy",
    "Comic Sans MS, cursive",
    "American Typewriter, serif"
]


// When the button is clicked, the following things should change

// - font family (use array above)
// - font color (either use randomcolor or your own array of colors)
// - font weight
// - button color (match the font color)

var pumpkin = document.getElementById('pumpkin');
var animItem = bodymovin.loadAnimation({
	wrapper: pumpkin,
	animType: 'svg',
	loop: true,
	animationData: JSON.parse(pumpkinData)
});
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
let beautifierBtn = document.getElementById("beautifierBtn");
let nameId = document.getElementById("name");
nameId.style.color = "orange";
beautifierBtn.style.backgroundColor = "orange";
document.body.style.backgroundColor = "orange";
let pumpkinPath = document.getElementsByTagName("path");
for(let i=0;i<pumpkinPath.length;i++){
	if(i !== 15){
		pumpkinPath[i].style.fill = "orange";
	}
}
beautifierBtn.addEventListener("click",function(){
	let randomNum = Math.floor(Math.random()*5);
	let randomColor = getRandomColor();
	nameId.style.fontFamily = fontsArr[randomNum];
	nameId.style.color = randomColor;
	nameId.style.fontWeight = 500;
	// beautifierBtn.style.color = randomColor;
	beautifierBtn.style.backgroundColor = randomColor;
	document.body.style.backgroundColor = randomColor;
	// let pumpkinPath = document.getElementsByTagName("path");
	for(let i=0;i<pumpkinPath.length;i++){
		if(i !== 15){
			pumpkinPath[i].style.fill = randomColor;
		}
	}
})

