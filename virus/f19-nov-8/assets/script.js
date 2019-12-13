console.log("local storage demo file");
//superbad net art
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return


	if(localStorage.getItem('cats')){
			// if item exists:
		console.log("yes cats (font size)");
		var pixelSize = localStorage.getItem("cats");
		pixelSize = parseInt(pixelSize);
		console.log(pixelSize);
		// convert item?

		// apply item data to site:
			document.getElementById("myDiv").style.fontSize = `${pixelSize}px`;
	}else{
		console.log("nocats  (font size)")
	}
}
	var saveUserInfo = function(){
		document.getElementById("myDiv").addEventListener("click", function(){
			//creating the variable
			var pixelSize = Math.round(Math.random()*100);
				//save or overwrite item
			localStorage.setItem("cats", pixelSize);
			//update site
			document.getElementById("myDiv").style.fontSize = `${pixelSize}px`;

		})
	}

//once contenet has been loaded









// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info
});
