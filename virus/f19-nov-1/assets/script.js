console.log("local storage demo file");
//local storage saves strings


//local storage step one: if statements, seeing if theres saved data
//step 2: assign numbers and shit

var saveUserInfo = function(){
	if (!storageAvailable('localStorage')){
		return;
	}} // if we can use localStorage, don't return

// localStorage.removeItem('color'); gets rid of it



//////////////////////on first site load STEP 1 using a string
	if(localStorage.getItem('color')){
		// if color has been saved/if it exists, get the color:
		var color = localStorage.getItem('color');
		// apply color to element:
		document.getElementById("myDiv").style.color = color;
	}


//STEP 1 using an integer
	if(localStorage.getItem('typePixels')){
		var fontSizeValue = parseInt(localStorage.getItem('typePixels')); //creating variable to use, grab contents of item, making it into an integer
		console.log(fontSizeValue)
		var increasedFontSize = fontSizeValue + 20;
		document.getElementById("myDiv").style.fontSize = increasedFontSize; //putting variable in css
	}



	if(localStorage.getItem('css')){
		var css = localStorage.getItem('css');
		var jsoncss = JSON.parse(css);  //making it an object, converts to an object instead of a string
		console.log(jsoncss);

				document.getElementById("myDiv").style.backgroundColor = jsoncss.backgroundC;
				document.getElementById("myDiv").style.transform = `skew(${jsoncss.skewValue}deg, ${jsoncss.skewValue}deg)`

	}





//////////////////////STEP 2/////////////////////////////

	document.getElementById("myDiv").addEventListener('click', function(){
		// when a user clicks on myDiv, produce a random color to save:
			console.log("clicked!")

		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);

		var newColor = "rgb(" + red + "," + green + "," + blue + ")";
	//	var newColor = `rgb(${red}, ${green}, ${blue})` template literal version of above

		localStorage.setItem('color', newColor); // save new color

		// set new color to item- updates:
		document.getElementById("myDiv").style.color = newColor;




//STEP 2 FONT SIZE:
	var randomFontSize = 20 + (Math.round(Math.random()*30));
		console.log(randomFontSize)

		document.getElementById("myDiv").style.fontSize = randomFontSize + "px";

		localStorage.setItem('typePixels', randomFontSize);



//STEP 2 css:
	var backgroundC = `rgbA(${red}, ${green}, ${blue}, 0.5)`; //opacity

	var skew = 10 - Math.round(Math.random()*20);

					var newCss = { //making an object, like an api
						skewValue : skew,
						bgColor : backgroundC
					}

						console.log(newCss)
						//console.log(newCss.skewValue) for example

				localStorage.setItem('css', JSON.stringify(newCss)); //saving all of it to local storage

				document.getElementById("myDiv").style.backgroundColor = backgroundC;
				document.getElementById("myDiv").style.transform = `skew(${skew}deg, ${skew}deg)`;



	})




saveUserInfo(); // run saving user info fxn
