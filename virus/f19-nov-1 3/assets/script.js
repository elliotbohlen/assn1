console.log("local storage demo file");

var saveUserInfo = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return


	if(localStorage.getItem('color')){
		// if color has been saved:
		var color = localStorage.getItem('color');

		// apply color to element: 
		document.getElementById("myDiv").style.color = color;

	}


	document.getElementById("myDiv").addEventListener('click', function(){
		// when a user clicks on myDiv, produce a random color to save:

		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);

		var newColor = "rgb(" + red + "," + green + "," + blue + ")";

		localStorage.setItem('color', newColor); // save new color

		// set new color to item:
		document.getElementById("myDiv").style.color = newColor;

	})


}


saveUserInfo(); // run saveing user info
