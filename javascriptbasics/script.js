var firstArray = ["xxx", "xoxo", "love"];
var arrayString = firstArray.toString();
console.log(arrayString);

for (var i = 0; i < myExampleArray.length; i++) {

	if(Array.isArray(myExampleArray[i])){
		// this value of myExampleArray is a nested array
		for (var j = 0; j < myExampleArray[i].length; j++) {
			console.log(myExampleArray[i][j])
		}

	}else{
		// this value of myExampleArray is NOT an array
		console.log(myExampleArray[i])
	}
}


/****************** EXAMPLE 2: ******************/

// example 2 outputs in our html document
// the line below searches our HTML document for our element by its id
var myWrapper = document.getElementById("wrapper");

for (var i = 0; i < 50; i++) {
	// the for loop runs 50 times, so it adds the div below 50 times
	// the string below contains a div, which is added (+=) to our wrapper with each for loop cycle.
	// within our string, we are using the variable "i" to generate numbers that output inline css values
	myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (255 - (i*10)) +',' + (i*10) + ',0); transform: rotate('+ (10 + i) +'deg);"></div>';

}
