var timer = 50;
var goldClicked;


var buttonEgg = function(singleEgg, singleYolk, body, chick){
	// console.log("test", singleYolk)
	
	if(singleEgg.classList.contains("goldEgg")){
		singleEgg.style.backgroundColor = "#FFDF00";
		singleYolk.style.backgroundColor = "#F9A602";
		goldClicked = true;
		// console.log("clicked")
		win.style.display = "block";
		win2.style.display = "block";
		win3.style.display = "block";
		body.style.animation = "colorBg 4s infinite";
		chick.style.display = "block";
		
		

	}else if(singleEgg.style.backgroundColor !== "black"){
			singleEgg.style.backgroundColor = "black";
			singleYolk.style.backgroundColor = "#DBC34D";
			
	}


// console.log(body.style.backgroundColor)

}

var eggFunction = function(i, goldEgg){
	

	// TRANSFORM SCALE DOESNT WORK WITH KEYFRAME ANIMATION
	// if (i%3 === 0) {
	// 	var scale = 0.9;
		
	// } else if (i%7 === 0) {
	// 	var scale = 2.15;
	// }



	if (Math.random() <= 0.25){
		var r = 201;
		var g = 144;
		var b = 31;
	} else if (Math.random() > 0.25 && Math.random() <= 0.5) {
		var r = 255;
		var g = 215;
		var b = 154;
	} else if (Math.random() > 0.5 && Math.random() <= 0.75) {
		var r = 255;
		var g = 252;
		var b = 236;
	} else if (Math.random() > 0.75 && Math.random() <= 1) {
		var r = 255;
		var g = 255;
		var b = 255;
	}






	var eggDelay = Math.random()*(-4);
	// console.log(eggDelay);

	if (i%3 === 0) {
		var duration = 1.25;
		
	} else if (i%7 === 0) {
		var duration = 1.5;
	}





	var specialClass = "";

	if(goldEgg === true){
		specialClass = "goldEgg";
	}

	

	

	document.getElementById("wrapper").insertAdjacentHTML("beforeend", `
		<div id="egg-${i}" class="egg ${specialClass}" style="
		background-color: rgb(${r}, ${g}, ${b});
		animation-delay: ${eggDelay}s;
		animation-duration: ${duration}s;
		">
		<div id="eggYolk-${i}" class="eggYolk"> </div>
		<div id="chick-${i}" class="chick"> <img src="images/chicken.svg"> </div>
		<div id = "cluck-${i}" class="cluck">cluck</div>
		</div>
		`);

	// transform:scale(${scale})



	var singleYolk = document.querySelector(`#eggYolk-${i}`);
	var singleEgg = document.querySelector(`#egg-${i}`);
	var body = document.querySelector(`body`);
	var chick = document.querySelector(`#chick-${i}`);
	var cluck = document.querySelector(`#cluck-${i}`);
	singleEgg.addEventListener("click", function(){
		buttonEgg(singleEgg,singleYolk,body,chick)
	})

	singleEgg.addEventListener("mouseover", function(){
	cluck.style.opacity = "1";
	})

	singleEgg.addEventListener("mouseout", function(){
	cluck.style.opacity = "0";
	})



	////////////////
	var easterEgg = document.querySelector(`h1`);
	var revealGoldEgg = document.querySelector(`.egg ${specialClass}`)
	

	easterEgg.addEventListener("click",function(){
		if(singleEgg.style.backgroundColor !== "black"){
		singleEgg.style.backgroundColor = "#F2C2C2";
		}
		if(singleEgg.classList.contains("goldEgg")){
			singleEgg.style.backgroundColor = "#9EC4C5";
		}


	})


	///////////////



}


var randomNumber = Math.floor(Math.random()*35);


for (var i = 0; i < 35; i++) {
	
	var goldEgg = false;

	if(i === randomNumber){
		goldEgg = true;
	}




	setTimeout(eggFunction, i*timer, i, goldEgg);
}


//////////////////

//ORIGINAL EGG TEST

// var singleEgg = document.querySelector(".egg");


// var isThisGold = false;

// var buttonEgg = function(){
// 	if(isThisGold === false){
// 			singleEgg.style.backgroundColor = "black";
// 			isThisGold = true;
// 		}

// }

// singleEgg.addEventListener("click", buttonEgg)


///////////////////

//SCROLLING

var scrolling = function(){
		var body = document.querySelector("body");

		var percentageScrolled = (window.scrollY + window.innerHeight)/body.offsetHeight;
	

		if(percentageScrolled >= 1 ){
			restart.style.display = "block";
			restart2.style.display = "block";

		}

	}


	window.addEventListener("scroll", scrolling);


//////////////////////

// Insert duck where mouse clicks.. doesnt work

	// var mouseX = event.clientX;
		// var mouseY = event.clientY;

		// document.getElementById("duckWrapper").insertAdjacentHTML("beforeend", `
		// <img id="duck" src="images/duck.svg" style="left: ${mouseX}vw; top: ${mouseY}vw;">
		// `);




