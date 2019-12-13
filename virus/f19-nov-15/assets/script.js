console.log("local storage demo file");


var checkForItems = function(){
	if(!localStorage.getItem('color')){
		// if color has been saved:
		var color = localStorage.getItem('color');

		// apply color to element:
		document.getElementById("myDiv").style.color = color;
	}};


	var saveUserInfo = function(){
		if (!storageAvailable('localStorage')){
			return;
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

	})};



/*
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return


	if(localStorage.getItem('YOURITEM')){
		// if item exists:

		// convert item?

		// apply item data to site:


	}
}


var saveUserInfo = function(){

	document.getElementById("myDiv").addEventListener('click', function(){

		// save or overwrite item:
		localStorage.setItem('YOURITEM', "YOUR DATA");

		// update site:

	})


}

*/
// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info
});
